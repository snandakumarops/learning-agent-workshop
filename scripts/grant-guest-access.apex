// Grant WorkshopHome page access to the Workshop Guest Profile
Profile guestProfile = [
    SELECT Id, Name FROM Profile
    WHERE Name LIKE '%Workshop%Guest%' OR Name LIKE '%Guest%'
    ORDER BY CreatedDate DESC
    LIMIT 1
];
System.debug('Guest Profile: ' + guestProfile.Name);

// Find the VF page
ApexPage vfPage = [SELECT Id, Name FROM ApexPage WHERE Name = 'WorkshopHome' LIMIT 1];
System.debug('VF Page: ' + vfPage.Name);

// Grant access
SetupEntityAccess sea = new SetupEntityAccess();
sea.ParentId = guestProfile.Id;
sea.SetupEntityId = vfPage.Id;
try {
    insert sea;
    System.debug('Access granted');
} catch (Exception e) {
    System.debug('Access may already exist: ' + e.getMessage());
}

// Print site URL
Site site = [SELECT Id, Name, GuestUserId, UrlPathPrefix, Subdomain FROM Site WHERE Name = 'Workshop' LIMIT 1];
System.debug('Site URL prefix: ' + site.UrlPathPrefix);
System.debug('Subdomain: ' + site.Subdomain);
