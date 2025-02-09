screenshots


![interactive shell image](./assets/Screenshot%20from%202025-02-09%2016-09-53.png)
 

![interactive shell image](./assets/Screenshot%20from%202025-02-09%2016-10-12.png)


### Why is it important to store passwords in a hashed format? What security advantage does this provide over plain text passwords?


It is important to store plain passwords in a hashed format to prevent them from bruteforce attacks. plain txt passwords are a huge risk if the database is accessed by anyone.

### How does implementing MFA enhance the security of the transaction process?What types of attacks does it help prevent?


Implementing MFA enhaces security enhannces security by adding an extra layer of verification which helps incase bruteforce or phishing attacks are successful.


### Why is it necessary to check the account balance before allowing a withdrawal?What risks are involved if this step is skipped?


it is neccessary to check balance to prevent a user from withdrawing an amount that is less his balance, if this step is skipped the bank will lose money.


### What purpose does the daily transaction limit serve? How does it help inpreventing fraudulent or excessive withdrawals?


it prevents rapid draining of amounts even if a hacker steals the logins.


### Improvement:

if i were to add extra feature, that would be adding a rate limiting feature on the login to prevent bruteforce and denial of service attacks.

The data i would track to detect fraud would be the balance, withdrawal habits and geolocation of where the login took place.
