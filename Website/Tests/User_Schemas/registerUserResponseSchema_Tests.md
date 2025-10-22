========REGISTER USER RESPONSE SCHEMA FIELDS========

user\_id -> length(12), required(), \[lowercase letters \& numbers]

docType -> required(), Can only contain the literal \["USER"]



date\_created\_at -> length(17), required(), Contains a date of ISO8601 format \[Must have date in the format YY-MM-DDTHH:MM:SS]

email -> min(9), max(30), required() \[Emails of the form [host@domain.com](mailto:host@domain.com) where both host and domain can contain numbers, letters and special characters]



password -> length(97), required() \[Contains a string of the form: ^\\$argon2id\\$v=19\\$m=65536,t=3,p=4\\$\[a-zA-Z0-9\\+\\/]{22}\\$\[a-zA-Z0-9\\+\\/]{43}$]

\[The password field takes an argon2 hash generated using v=19, m=65536, t=3 and p=4.]



phone\_number -> min(8), max(12), required() \[Contains only numbers]



first\_name -> min(1), max(100), required() \[Contains uppercase letters, lowercase letters, hyphens and single-quotes]

last\_name -> min(1), max(100), required() \[Contains uppercase letters, lowercase letters, hyphens and single-quotes]



user\_role -> required() Can contain only the following literals \["user", "admin"]

upper\_size\_number -> required() Can only contain the following integers \[46, 44, 42, 40, 38, 36]



upper\_size\_letter -> required() Can only contain the following literals \["XXL", "XL", "L", "M", "S", "XS"]

others\_size\_letter -> required() Can only contain the following literals \["XXL", "XL", "L", "M", "S", "XS"]



email\_comms\_type -> required() Can be one of the following literals \["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"]

sms\_comms -> required() Can one of the Boolean values true or false



ShippingAddresses -> Empty Array



CartItems -> Empty Array



\_id -> Valid MongoDB ObjectID



\_V -> Valid positive integer

========REGISTER USER RESPONSE SCHEMA FIELDS========



Create 2 test cases for the happy path

HAPPY PATH TEST CASES

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> 



\* \["mn9i1asdfgvc", "25-10-24T11:45:04", "dcab@hostmai\_l.com", "$argon2id$v=19$m=65536,t=3,p=4$ZyXwVuTsRqPoNmLkJiHg$QwErTyUiOpAsDfGhJkLzXcVbNmQwErTyUiOpAsDfGh", "919731926929", "Muhammad", "", "user", 42, "L", "L", "One weekly recap", true, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] ->



Create test cases with only 1 field having a boundary test case value

HAPPY PATH BOUNDARY TEST CASES

\* \["ab01dhiojniu", "25-10-04T12:59:59", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Date Value**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc/d44@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Email Value**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc@de.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Email Minimum Length**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abcdefghijklm@mnopqrstuvwx.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Email Maximum Length**



<**PASSWORD TEST NOT NEEDED**>



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "6834002", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Phone Number Minimum Length**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Phone Number Maximum Length**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Ya'el", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **First Name Value**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "A", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **First Name Minimum Length**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZ", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **First Name Maximum Length**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Zaghari-Ratcliffe", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Last Name Value**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "B", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Last Name Minimum Length**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZ", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Last Name Maximum Length**







Here, we will write the following types of test cases for each field: data\_type\_test\_case, required\_field\_test\_case, 1\_char\_below\_min\_length, 1\_char\_above\_max\_length, format\_validation\_test\_case,

 

We will also write test cases to put invalid values in Enums

INDIVIDUAL FIELD VALIDATION TEST CASES

**<USER ID TEST CASES - IFV>**

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid User ID Datatype**



\* \[123456789011, "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M" "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid User ID Datatype**



\* \["ab01dhiojni\_", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid User ID Value (Format)**



\* \["ab01dhiojni", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid User ID Length (Below Length)**



\* \["ab01dhiojnius", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid User ID Length (Above Length)**



\* \["", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Empty User ID**



\* \[, "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing User ID**



<**DATE TEST CASES - IFV**>

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Date Datatype**



\* \["ab01dhiojniu", 251004124204, "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Date Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:99", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Date Value (Format)**



\* \["ab01dhiojniu",  "2025-10-22T13:45:3", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Date Length (Below Length)**



\* \["ab01dhiojniu",  "2025-10-22T13:45:30.1", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Date Length (Above Length)**



\* \["ab01dhiojniu",  "", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP"

, "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Empty Date**



\* \["ab01dhiojniu",  , "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing Date**



<**EMAIL TEST CASES - IFV**>

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Email Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:04", 100AOLForever, "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Email Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Email Value (Format)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "a@bc.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP" ,"917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Email Length (Below Minimum)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abcdefghijklm@mnopqrstuvwxa.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Email Length (Above Maximum)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP","917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Empty Email**



\* \["ab01dhiojniu", "25-10-04T12:42:04", , "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP","917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing Email**





<**PASSWORD HASH TEST CASE - IFV**>

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Password Hash Value**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNo", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Password Hash Value (Below Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoPQ", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Password Hash Value (Above Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", , "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing Password Hash**





<**PHONE NUMBER - IFV**>

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Phone Number DataType**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", 917560847544, "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Phone Number DataType**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "9175-6084-7544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Phone Number Value (Format)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "12345", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Phone Number Length (Below Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "+917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Phone Number Length (Above Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Empty Phone Number**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", , "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing Phone Number**





<**FIRST NAME - IFV**>

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid First Name Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", 123, "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid First Name Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Ari\_f", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid First Name Value (Format)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid First Name Length \& Empty First Name (Below Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZa", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid First Name Length (Above Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", , "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing First Name**





<**LAST NAME - IFV**>

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Last Name Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", 123, "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Last Name Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Kh\_an", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Last Name Value (Format)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Last Name Length \& Empty Last Name (Below Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZa", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Last Name Length (Above Length)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", , "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing Last Name**





<**USER ROLE - IFV**>

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid User Role Value (admin)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "user", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid User Role Value (user)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "User", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid User Role Value**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", 12345, 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] ->  **Invalid User Role Datatype**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", , 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] ->  **Empty User Role**





**<UPPER SIZE NUMBER - IFV>**

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 46, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Number** **(46)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 44, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Number (44)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 42, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Number (42)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Number (40)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 38, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Number (38)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 36, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Number (36)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 48, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Upper Size Number (48)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 34, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Upper Size Number (34)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", "46", "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Upper Size Number DataType ("46")**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", , "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] **-> Missing Upper Size Number**





**<UPPER SIZE LETTER - IFV>**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "XXL", "XXL", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Letter (XXL)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "XL", "XL", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Letter (XL)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "L", "L", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Letter (L)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Letter (M)"**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "S", "S", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Letter (S)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "XS", "XS", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Upper Size Letter (XS)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "XXXL", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Upper Size Letter (XXXL)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "XXS", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Upper Size Letter (XXS)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, 2615, "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Upper Size Letter Datatype (2615)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "", "M" "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Empty Upper Size Letter**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, , "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing Upper Size Letter**





**<EMAIL COMMS TYPE -IFV>**

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Email Comms Type Value (I want all weekly emails)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "One weekly recap", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Email Comms Type Value (One weekly recap)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "Stock notifications only", false,\[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Email Comms Type Value (Stock notifications only)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "Never / Unsubscribe", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid Email Comms Type Value (Never / Unsubscribe)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "Always", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Email Comms Type Value ("Always")**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", 123, false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid Email Comms Type Datatype (123)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Empty Email Comms Type Value**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", , false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing Email Comms Type Value**





**<SMS COMMS TYPE - IFV>**

\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", false, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid SMS Comms Type Value (false)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", true, \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Valid SMS Comms Type Value (true)**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", "false", \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Invalid SMS Comms Type Value ("false")**



\* \["ab01dhiojniu", "25-10-04T12:42:04", "abc\_d01@hostmail.com", "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNoP", "917560847544", "Arif", "Khan", "admin", 40, "M", "M", "I want all emails", , \[], \[], ObjectId("656f7c9a8b3e4f1d2a7b9c0e"), 0] -> **Missing SMS Comms Type Value**









