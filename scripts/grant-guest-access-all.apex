// Grant each Workshop Site's index VF page to that Site's own guest user.
// SetupEntityAccess.ParentId must be a PermissionSet Id (the one owned by the
// guest profile: IsOwnedByProfile = true), NOT the Profile Id directly.
// Resolved via Site.GuestUserId -> User.ProfileId -> PermissionSet.

Map<String, String> siteToPage = new Map<String, String>{
    'Workshop'         => 'WorkshopHome',
    'WorkshopExtended' => 'WorkshopExtended'
};

for (Site s : [
    SELECT Id, Name, GuestUserId, UrlPathPrefix
    FROM Site
    WHERE Name IN :siteToPage.keySet()
]) {
    String pageName = siteToPage.get(s.Name);
    System.debug('Site: ' + s.Name + ' | prefix: ' + s.UrlPathPrefix + ' | page: ' + pageName);

    if (s.GuestUserId == null) {
        System.debug('  No GuestUserId yet for ' + s.Name + ' — skipping.');
        continue;
    }

    User guest = [SELECT Id, ProfileId FROM User WHERE Id = :s.GuestUserId LIMIT 1];
    PermissionSet ps = [
        SELECT Id FROM PermissionSet
        WHERE IsOwnedByProfile = true AND ProfileId = :guest.ProfileId
        LIMIT 1
    ];
    ApexPage vfPage = [SELECT Id FROM ApexPage WHERE Name = :pageName LIMIT 1];

    // Skip if the grant already exists (idempotent re-runs)
    Integer existing = [
        SELECT COUNT() FROM SetupEntityAccess
        WHERE ParentId = :ps.Id AND SetupEntityId = :vfPage.Id
    ];
    if (existing > 0) {
        System.debug('  Access already present for ' + pageName);
        continue;
    }

    SetupEntityAccess sea = new SetupEntityAccess();
    sea.ParentId = ps.Id;
    sea.SetupEntityId = vfPage.Id;
    try {
        insert sea;
        System.debug('  Access granted via PermissionSet ' + ps.Id);
    } catch (Exception e) {
        System.debug('  Grant failed: ' + e.getMessage());
    }
}
