---
hide:
  - navigation
---

<div align="center">
  <h1>🎯 Kudo 🌍</h1>
  <h4>The open-source and practical book on cybersecurity</h4>
</div>



The formula is simple:

$$
\text{Concordance} + \text{Trust} = \text{Cybersecurity}
$$


> Applies to governments, investors, companies, clients, users among others...


<div align="center">
  <div align="center">
    <a href="https://divisioncero.com/home/cybersecurity-kit" target="_blank" style="text-decoration: none;">
      <button style="background-color: #0078D4; color: white; border: none; padding: 10px 20px; font-size: 16px; border-radius: 5px; cursor: pointer;">
        Cybersecurity Kit Download
      </button>
    </a>
  </div>
</div>


## 🛡️ Cybersecurity Policy

:   !!! tip "Cybersecurity Policy"

        We believe in a digital world built on freedom, responsibility, and integrity.

        Cybersecurity is not just about defense or attack — it’s about mutual respect. It’s about striving to do your best that every interaction, every line of code, and every user experience reflects a commitment agreement on what is defined in policies and procedures that shine for their extensive and theoretical content.


## 🤝 Sections

<div class="grid cards" markdown>

- :information_source: __[Template Policies]__
- :green_heart: __[Baseline]__

</div>

  [Template Policies]: ./policies/index.md
  [Baseline]: ./baseline/index.md


## 🎯 Why use this site?

- [X] **Trust among stakeholders:** Applies to investors, governments, companies, clients, and users.  
- [X] **Define baseline policies:** Establishes a common framework for cybersecurity management.  
- [X] **Team training:** Supports initial and ongoing training for collaborators.  
- [X] **Simplify audits:** Demonstrates a structured approach during internal and external evaluations.  
- [X] **Scale security practices:** Enables replication of best practices across different contexts.  
- [X] **Optimize Business as Usual (BaU):** Improves operational efficiency and risk management.  


## 🔍 Compliance

:   !!! info "Our Reference"

        We're referring to the [Cloud Security Alliance](https://cloudsecurityalliance.org/?from=kudo.divisioncero.com) because we've found it aligns with the reality of cloud environments. We invite you to visit their website and attend their events; they're great role models.


### Shared responsibility

It's inevitable to talk about compliance without considering the three main cloud service models.

#### Cloud Service Models

``` mermaid
graph TD
  subgraph "Cloud Service Models"
    subgraph "IaaS"
        B1["OS & Apps"]
        B2["Network Config"]
        B3["Security Groups"]
    end
    
    subgraph "PaaS"
        C1["App Development"]
        C2["User Management"]
    end
    
    subgraph "SaaS"
        D1["User Access Control"]
        D2["Data Usage"]
    end
  end
```

``` mermaid
graph TD
    subgraph "Responsibility Distribution"
        subgraph "IaaS"
            I1["Customer: 80%"]
            I2["Provider: 20%"]
        end
        
        subgraph "PaaS"
            P1["Customer: 50%"]
            P2["Provider: 50%"]
        end
        
        subgraph "SaaS"
            S1["Customer: 20%"]
            S2["Provider: 80%"]
        end
    end
    
    %% Invisible connections to maintain alignment
    I1 ~~~ P1
    P1 ~~~ S1
    I2 ~~~ P2
    P2 ~~~ S2
```

#### Cloud Provider Responsibilities

``` mermaid
graph TD
  subgraph "Cloud Provider Responsibility"
      E1["Physical Infrastructure"]
      E2["Network Infrastructure"]
      E3["Hypervisor"]
      E4["OS (for PaaS)"]
      E5["Application (for SaaS)"]
  end
```

#### Customer Responsibilities

``` mermaid
graph TD
  subgraph "Customer Responsibility"
    A1["Data & Content"]
    A2["Identity & Access Management"]
    A3["Client-side Security"]
    A4["Platform & Application Config"]
  end
```

#### Shared Responsibility Explanation

The shared responsibility model defines security obligations across different cloud service models:

- **IaaS (Infrastructure as a Service)**: The provider manages the physical infrastructure, network, and virtualization. Customers are responsible for operating systems, applications, data, and configurations.

- **PaaS (Platform as a Service)**: The provider extends management to include operating systems and middleware. Customers focus on applications and data while having less infrastructure management burden.

- **SaaS (Software as a Service)**: The provider manages nearly everything, including the application itself. Customers are primarily responsible for data, user access controls, and compliance requirements.

As you move from IaaS to SaaS, more responsibility shifts to the cloud provider, but data protection and access management always remain customer responsibilities.

### Kudo Domains

Domains are the core components of the Kudo framework, correlated with the Cloud Security Alliance domains.

``` mermaid
graph LR
  KUDO[Kudo]
  DOM_1[Organizational Concordance
  GRC > A&A]
  DOM_2[Application Security 
  AIS > IPY]
  DOM_3[Organizational Continuity and Change 
  BCR > CCC]
  DOM_4[Infrastructure Protection 
  DCS > IVS > CEK]
  DOM_5[Human Talent and Supplier Assurance 
  HRS > STA]
  DOM_6[Device and Endpoint Management 
  IAM > UEM]
  DOM_7[Security Analysis, Detection, and Response 
  TVM > LOG > SEF]
  DOM_8[Data Protection
  DSP]

  DOM1[A&A - Audit and Assurance]
  DOM2[AIS – Application and Interface Security]
  DOM3[BCR – Business Continuity and Operational Resilience]
  DOM4[CCC – Change Control and Configuration Management]
  DOM5[CEK – Cryptography, Encryption, and Key Management]
  DOM6[STA - Supply Chain Mgmt, Transparency & Accountability]
  DOM7[DCS – Datacenter Security]
  DOM8[DSP – Data Security and Privacy Lifecycle Management]
  DOM9[GRC – Governance, Risk, and Compliance]
  DOM10[HRS – Human Resources Security]
  DOM11[IAM – Identity and Access Management]
  DOM12[IPY – Interoperability and Portability]
  DOM13[IVS – Infrastructure and Virtualization Security]
  DOM14[LOG – Logging and Monitoring]
  DOM15[SEF – Security Incident Management, E-Discovery & Forensics]
  DOM16[TVM – Threat and Vulnerability Management]
  DOM17[UEM – Universal Endpoint Management]
  
  CSA[Cloud Security Alliance]

  KUDO --> DOM_1
  KUDO --> DOM_2
  KUDO --> DOM_3
  KUDO --> DOM_4
  KUDO --> DOM_5
  KUDO --> DOM_6
  KUDO --> DOM_7
  KUDO --> DOM_8
  
  DOM_1 --> DOM1
  DOM_1 --> DOM9
  DOM_2 --> DOM2
  DOM_2 --> DOM12
  DOM_3 --> DOM3
  DOM_3 --> DOM4
  DOM_4 --> DOM7
  DOM_4 --> DOM13
  DOM_4 --> DOM5
  DOM_5 --> DOM10
  DOM_5 --> DOM6
  DOM_6 --> DOM11
  DOM_6 --> DOM17
  DOM_7 --> DOM16
  DOM_7 --> DOM14
  DOM_7 --> DOM15
  DOM_8 --> DOM8
  
  DOM1 --> CSA
  DOM2 --> CSA
  DOM3 --> CSA
  DOM4 --> CSA
  DOM5 --> CSA
  DOM6 --> CSA
  DOM7 --> CSA
  DOM8 --> CSA
  DOM9 --> CSA
  DOM10 --> CSA
  DOM11 --> CSA
  DOM12 --> CSA
  DOM13 --> CSA
  DOM14 --> CSA
  DOM15 --> CSA
  DOM16 --> CSA
  DOM17 --> CSA
```

## 🏛️ Document Governance

### Enterprise Context

This means that the documents are not only applicable to a specific project or team but are intended to be used across the entire organization.

All documents are created and maintained in a hypothetical business context is your name is `DivisionCero`.

## 👥 Organizational Structure

The organizational structure at DivisionCero follows a hierarchical model, with clear reporting lines and functional departments that facilitate governance, accountability, and specialization.

``` mermaid
graph TD
    CEO[CEO] --> CTO[Chief Technology Officer]
    CEO --> CFO[Chief Financial Officer]
    CEO --> COO[Chief Operations Officer]
    CEO --> CISO[Chief Information Security Officer]
    CEO --> CLO[Chief Legal Officer]
    
    CTO --> SWD[Software Development]
    CTO --> OPS[Operations]
    
    CISO --> CSEC[Cybersecurity Team]
    CISO --> GRCT[GRC Team]
    
    COO --> PROC[Procurement]
    COO --> HR[Human Resources]
    
    CLO --> LEG[Legal]
    CLO --> PRIV[Privacy Office]
    
    CFO --> FIN[Finance]
    CFO --> IA[Internal Audit]
```

### 🌐 Hypothetical Business Context

- [X] A technology company offering software as a service (SaaS).
- [X] Has teams for software development, infrastructure, quality, and security; also applicable in outsourced contexts.
- [X] Operates its infrastructure across multiple Cloud Service Providers (CSPs).  
- [X] Serves clients in various countries.  
- [X] Employs collaborators working both on-site and remotely.

### 🪪 Roles and Responsibilities

- [X] **CEO (Chief Executive Officer):** Ultimately accountable for organizational security posture and risk management strategy.
- [X] **CISO (Chief Information Security Officer):** Primary sponsor of the information security policy framework and governance structure.
- [X] **Cybersecurity Team:** Implements security controls, monitors threats, and responds to security incidents.
- [X] **GRC Team (Governance, Risk & Compliance):** Curators of the document architecture and responsible for the policy lifecycle management.
- [X] **CTO (Chief Technology Officer) & Technology Teams:** Ensure secure implementation of systems and infrastructure following defined policies.
- [X] **Internal Audit:** Provides independent verification of policy compliance and control effectiveness.
- [X] **Legal & Privacy Office:** Ensures alignment with regulatory requirements and data protection obligations.
- [X] **COO (Chief Operations Officer):** Oversees day-to-day operations ensuring security procedures are integrated into business processes.
- [X] **CLO (Chief Legal Officer):** Manages legal risk associated with cybersecurity incidents and ensures regulatory compliance.
- [X] **CFO (Chief Financial Officer):** Ensures appropriate financial resources for security initiatives and evaluates security investments.
- [X] **Software Development:** Implements secure development practices and addresses security requirements in software products.
- [X] **Operations:** Maintains secure infrastructure configurations and operational security controls.
- [X] **Legal/Privacy:** Provides legal guidance on security policies and handles security-related legal issues.
- [X] **Cybersecurity Team:** Executes security monitoring, incident response, and technical security assessments.
- [X] **GRC Team:** Manages risk assessments, compliance monitoring, and the security governance framework.
- [X] **Procurement:** Evaluates vendor security practices and incorporates security requirements in contracts.
- [X] **Human Resources:** Manages security training, background checks, and security aspects of personnel processes.
- [X] **Finance:** Manages financial aspects of the security program and security-related expenditures.
- [X] **Internal Audit:** Conducts independent assessments of security controls and provides assurance of effectiveness.
- [X] **All Staff:** Responsible for understanding and complying with established policies and procedures.

### 🔄 Document life cycle 

``` mermaid 
graph LR
  A[📌 Need] --> B[✍️ Creation]
  B --> C[🔍 Review]
  C --> D[🌀 Versioning]
  D --> E[📢 Publication]
  E --> F[🔄 Update]
  F --> A
```


## 📙 Philosophy

*Let’s build technology that is worthy of trust—not just designed to make attacks harder.  
Let’s write code meant to be shared, not hidden.  
Each line of code is a link in a global chain with the potential to improve people’s lives.*

*Let’s stand together against the ego in cybersecurity that has affected us all, often leading to the creation of redundant frameworks, standards, references, and guidelines—each centered on its own vision, without truly aiming to unify or bring greater value to a safer world. This fragmentation has resulted in decades of best practices that, while valid, remain disconnected from real and widespread applicability. True progress will only come when we stop competing and start collaborating for cybersecurity that is more accessible and effective for everyone.*

*Finally, let’s always remember that technology exists to serve people. We must not allow technological advancement to dehumanize us or pull us away from our essential purpose: to create tools that empower, protect, and uplift people in their everyday lives. Cybersecurity is, above all, an ethical responsibility to those who trust us to safeguard their privacy, their rights, and their freedom in the cyberspace.*


## 📂 Documentation structure

``` { .sh .no-copy }
/Cybersecurity Compliance/
├── Policies/
├── Best Practices/
│   ├── Baseline/
│   ├── Tools/
│   └── Courses/
```


## 💾 Clarifications

??? information "Versioning"

    The versioning of documents follows this nomenclature:

    - Continuous changes vX.Y.Z
        - X: Major version (significant changes)
        - Y: Minor version (improvements or minor changes)
        - Z: Patch version (bug fixes)
        - Example: v1.0.0 (initial version), v1.1.0 (improvements), v1.1.1 (bug fixes)

    - Releases grouped on the site at a general level are referenced by year and quarter:
        - Example: 2025-Q2 (initial version of the second quarter of 2025)

??? information "Change Control"

    Change control is carried out continuously with traceability through the git flow; specifically through Pull Requests (PR), which can be validated in the following [repository](https://github.com/PetterVargas/kudo-divisioncero-com). At the top right of the website, there is a direct link.

??? information "Scope"

    We aim for the scope of this project to be broad and for its applicability in each context to be general, not segmented. Therefore, each document is intended to be applicable to any context and not just a specific one.
