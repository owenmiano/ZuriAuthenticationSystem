# ZuriAuthenticationSystem
Role-based access control (RBAC) refers to the idea of assigning permissions to users based on their role within an organization. It offers a simple, manageable approach to access management that is less prone to error than assigning permissions to users individually.
What is JSON Web Token?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
When should you use JSON Web Tokens?
Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with

REGISTRATION ROUTES
![image](https://user-images.githubusercontent.com/31838619/183238318-3d1c6c6b-61ea-4c17-ba03-fb84f9cae0b0.png)
![image](https://user-images.githubusercontent.com/31838619/183238342-60b2eda0-7ded-4ac3-b025-890a1c72529c.png)
![image](https://user-images.githubusercontent.com/31838619/183238388-313916d4-1970-4095-a6f3-c464d9f74e0e.png)
![image](https://user-images.githubusercontent.com/31838619/183238405-59d31a9c-4082-4e6b-94e5-5edbc6379d45.png)

LOGIN ROUTES
![image](https://user-images.githubusercontent.com/31838619/183238437-0f71e2e9-eb34-4255-872d-4aa650146f4f.png)
![image](https://user-images.githubusercontent.com/31838619/183238473-790d8267-9e37-4b35-a6eb-8caebebc8d4d.png)
![image](https://user-images.githubusercontent.com/31838619/183238497-aae41c6a-f4b3-4c36-8475-53f805ecbe86.png)
![image](https://user-images.githubusercontent.com/31838619/183238508-059009c7-e6fb-4d44-8f39-9e27a35a9bd0.png)

PASSWORD RECOVERY
![image](https://user-images.githubusercontent.com/31838619/183238567-727d202e-e1f6-448b-96fc-b338175484cb.png)
![image](https://user-images.githubusercontent.com/31838619/183238589-1c5fa328-18d2-4819-8fc6-390c0ae1ec63.png)

BOOK ROUTES
![image](https://user-images.githubusercontent.com/31838619/183238622-bfb837b5-14b9-4efd-88d3-16548858fd8e.png)
![image](https://user-images.githubusercontent.com/31838619/183238636-3e8fa368-9bdf-4758-9b39-aa8f0606cc57.png)
![image](https://user-images.githubusercontent.com/31838619/183238649-a6a960bc-bdcd-49c7-891b-304ae22c8713.png)
![image](https://user-images.githubusercontent.com/31838619/183238660-319775b5-a8c6-4d84-baf5-cc737870cf9d.png)



