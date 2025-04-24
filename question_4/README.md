# Question 4

System Design & Solution Architecture

Create system design architecture of integration between applications in Question 2 and 3.

The next version of the section 2 application intends to have Web3 Self-sovereign identity for customer onboarding, verifiable credentials for asset management, and offboarding process. This version extends to support portability on both on-premise and cloud-native deployment but is geared more towards cloud workload. It will use a Verifiable Credential Self-sovereign identity management paradigm, particularly open-source libraries such as Aries, Indy, etc. The architecture must capture the core principles of a well-architectured design supporting maintainability, scalability, and reliability. The key highlight of this system design is the integration with Web3 SSI module. The system design will integrate with Web3 Verifiable Credentials called WeIDY. WeIDY will handle the onboarding and user management credentialing for the Unit Trust company MTCT.

**Expectations & Success Criteria**

- Create system architecture design
- Create a Data Flow Diagram (DFD) diagrams
- The architecture should cover Web3, micro-services / modules backend layer, and actors & interfaces
- Label all services and components and its rationale
- The system design should adopt modern technologies and best practices
- Document in a Wiki description of the architecture deisgn
- Feel free to design however you feel professionally inclined to do. Implementations are all yours.

<br />

### Solution

#### System Architecture Diagram

<img src="/diagrams/system_architecture_diagram.png"/>

The system uses credential to identify investors. Only investors can buy/sell assets from the company.

**Actors**

- Investor (Retail Customer)

    Accesses Investor Portal for self-service onboarding, buying/selling of assets.

- Agent (Financial Advisor)

    Supports onboarding and KYC processes from branch units.

- Admin/Compliance Team

    Performs KYC verification, credential governance and credential revocation.

- HQ (Staffs from finance, tech, and product departments)

    Manages product updates and sales reconciliation.

<br />

**Front End (Interfaces)**

- Investor Portal

    A web app for retail users.

- Officer Portal

    An admin web app for branch and HQ staff.

<br />

**Back End**

- API Gateway

- Docker microservices

    - User Service
        - Registers investors and financial advisers. 
        - Integrates with WeIDY for credential issuance.

    - Asset Service
        - Handles buying/selling of unit trust products.
        - Tracks asset holdings per investor.

    - Credential Service
        - Bridges MTCT microservices with WeIDY APIs.
        - Manages issuance, verification, and revocation workflows.

- Storage Layer

    - PostgreSQL
        - Stores assets and users data.

    - AWS S3
        - Stores KYC documents.

<br />

**Monitoring & Logging**

- DataDog

    For infrastructure monitoring, application performance tracking, and alert visualization across services.

- PagerDuty

    For incident response and on-call management to ensure quick resolution of system outages or anomalies.

<br />

**Decentralised Storage**

- IPFS

    Stores verifiable credentials in a tamper-proof, distributed manner, enhancing data integrity and censorship resistance.

<br />

#### Data Flow Diagram

**Data Flow Diagram Level 0**

<img src="/diagrams/data_flow_diagram_level_0.png"/>

<br />

**Data Flow Level 1**

- User registration & KYC

    - Investor -> User Service -> PostgreSQL -> Credential Service -> WeIDY -> Blockchain Node -> IPFS

- Credential Issuance

    - Agent -> User Service -> S3 -> Credential Service -> WeIDY -> Blockchain Node -> IPFS

- Asset Handling

    - HQ -> Asset Service -> PostgreSQL, S3

- Credential Governance

    - Admin/Compliance -> Credential Service (issue credential / revoke credential)
