// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProjectImage {
  url: string;
  alt: string;
  // placeholder?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  liveUrl?: string | string[];
  technologies: string[];
  images: ProjectImage[];
  type: 'frontend' | 'backend' | 'fullstack' | 'automation';
  relatedProject?: string | string[]; // ID of related project (frontend/backend pair)
  headerTitle?: string;
}

// ─── GitHub Config & Helper ───────────────────────────────────────────────────

const GITHUB_CONFIG = {
  username: 'BunlongCHEA',
  branch: 'main',
};

export const getGitHubImageUrl = (repository: string, imagePath: string): string => {
  return `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repository}/${GITHUB_CONFIG.branch}/${imagePath}`;
};

// ─── GitHub Projects Data ───────────────────────────────────────────────────

// Data - For GitHub projects
export const projects: Project[] = [
  {
    id: 'ansible-automation',
    name: 'Kubernetes - Rancher - ArgoCD - VM (Ansible Automation)',
    description: 'Build with Ansible Automation to deploy Kubernetes cluster with Rancher and ArgoCD on VMs. Fully automated CI/CD pipeline for application deployment and management.',
    url: 'https://github.com/BunlongCHEA/Ansible-Playbook-Role',
    liveUrl: [
      'https://argocd1.bunlong.uk',
      'https://rancher.bunlong.uk'
    ],
    technologies: ['Ansible', 'Rancher', 'Kubernetes', 'ArgoCD', 'Docker' , 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/argocd_1.png'), alt: 'ArgoCD-Interface' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/cloudflare_1.png'), alt: 'Cloudflare-DNS' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/digitalocean_1.png'), alt: 'DigitalOcean-Droplet-K3S' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/digitalocean_2.png'), alt: 'DigitalOcean-Droplet-Detail' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/digitalocean_3.png'), alt: 'DigitalOcean-API' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/linux_1.png'), alt: 'Command-Access-Droplet' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/linux_2.png'), alt: 'Command-Systemctl-k3s' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/linux_3.png'), alt: 'Command-k3s-Cluster-Pods' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/linux_4.png'), alt: 'Command-k3s-Cluster-Cert-Secrets' },
      { url: getGitHubImageUrl('Ansible-Playbook-Role', 'images/linux_5.png'), alt: 'Command-Ingress' },
    ],
    type: 'automation',
    headerTitle: 'Ansible Automation & Infrastructure Project'
  },
  {
    id: 'terraform-automation',
    name: 'Kubernetes - Rancher - ArgoCD - VM (Terraform + Ansible Automation)',
    description: 'Build with Terraform + Ansible Automation to deploy Kubernetes cluster with Rancher and ArgoCD on VMs. Fully automated CI/CD pipeline for application deployment and management.',
    url: 'https://github.com/BunlongCHEA/Terraform-Plan',
    liveUrl: [
      'https://argocd1.bunlong.uk',
      'https://rancher.bunlong.uk'
    ],
    technologies: ['Terraform', 'Ansible', 'Rancher', 'Kubernetes', 'ArgoCD', 'Docker', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Terraform-Plan', 'images/ansible-1.png'), alt: 'Ansible-Running' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/terraform-1.png'), alt: 'Terraform-Main-Script-To-Run-this-Project' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/cloudflare-1.png'), alt: 'Cloudflare-Deploy-For-Rancher' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/kubectl-1.png'), alt: 'Kubectl-Get-All-Pods' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/kubectl-2.png'), alt: 'Kubectl-Check-All-Pods-And-Nodes-Resources' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/kubectl-3.png'), alt: 'Kubectl-Check-Certificate-Ingress-Status-Success' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/kubectl-4.png'), alt: 'Kubectl-Describe-Certificate-Rancher-Detail' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/kubectl-5.png'), alt: 'Kubectl-CertificateRequest-Rancher-by-Cert-Manager' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/kubectl-6.png'), alt: 'Kubectl-Get-All-Certificate-Lists' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/rancher-1.png'), alt: 'Rancher-Login-Page' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/rancher-2.png'), alt: 'Rancher-Home-Page-With-K3S' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/gcp-1.png'), alt: 'GCP-Compute-Engine' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/gcp-2.png'), alt: 'GCP-Compute-Engine-SSH' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/gcp-3.png'), alt: 'GCP-Compute-Engine-Terraform-Apply' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/gcp-4.png'), alt: 'GCP-Compute-Engine-Terraform-Destroy' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/argocd-1.png'), alt: 'ArgoCD-Applications-Tiles-KYC-Blockchain-App-And-DB' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/argocd-2.png'), alt: 'ArgoCD-Application-Tree-KYC-Blockchain-DB-Postgres-Resources' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/argocd-3.png'), alt: 'ArgoCD-Application-Tree-KYC-Blockchain-App-Config-And-Secrets' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/argocd-4.png'), alt: 'ArgoCD-Application-Tree-KYC-Blockchain-Monitoring-And-Ingress-Certificate' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/argocd-5.png'), alt: 'ArgoCD-Applications-Tiles-All-Four-Apps-Healthy-Synced' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/argocd-6.png'), alt: 'ArgoCD-Application-Tree-KYC-Logging-Stack-Fluent-Bit-Kibana-Elasticsearch' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/kibana-elk-1.png'), alt: 'Kibana-Discover-KYC-Logs-Data-View' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/monitoring-1.png'), alt: 'Grafana-Welcome-Home-Page' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/monitoring-1-1.png'), alt: 'Grafana-Dashboards-List-Kubernetes-Prometheus-Node-Exporter' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/monitoring-1-2.png'), alt: 'Grafana-Kubernetes-Views-Global-CPU-RAM-Overview' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/monitoring-1-3.png'), alt: 'Grafana-Kubernetes-Compute-Resources-Node-Pods-Memory-Usage' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/monitoring-2.png'), alt: 'Prometheus-Query-Page-Empty-State' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/monitoring-2-1.png'), alt: 'Prometheus-Target-Health-KYC-Blockchain-Monitor-Down-Postgres-Monitor-Up' },
      { url: getGitHubImageUrl('Terraform-Plan', 'images/monitoring-2-2.png'), alt: 'Prometheus-Target-Health-Kube-Prometheus-Stack-Alertmanager-Apiserver-Up' },
    ],
    type: 'automation',
    headerTitle: 'Terraform + Ansible Automation & Infrastructure Project'
  },
  {
    id: 'blockchain-kyc-nextjs',
    name: 'KYC Blockchain UI (Next.js)',
    description: 'A full-stack blockchain-based KYC platform built with Next.js and TypeScript, featuring a dual-portal architecture (Admin & Customer), JWT authentication, blockchain ledger for immutable KYC records, certificate management, and Kubernetes deployment.',
    url: 'https://github.com/BunlongCHEA/NextJS-Blockchain-KYC',
    // liveUrl: 'https://kyc.bunlong.uk',
    liveUrl: [
      'https://kyc.bunlong.uk/login/admin',
      'https://kyc.bunlong.uk/login/customer'
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      // ── System Overview ──────────────────────────────────────────────────────
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/kyc-1.png'),
        alt: 'KYC-Blockchain-System-Architecture-Diagram',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/argocd-1.png'),
        alt: 'ArgoCD-Overview-System-Architecture-Diagram',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/argocd-2.png'),
        alt: 'ArgoCD-Detail-Frontend-System-Architecture-Diagram',
      },
      // ── Admin Portal ─────────────────────────────────────────────────────────
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-1.png'),
        alt: 'Admin-Login-Page',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-2.png'),
        alt: 'Admin-Dashboard-Overview-Stats',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-3.png'),
        alt: 'Admin-Dashboard-KYC-Summary-Charts',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-4.png'),
        alt: 'Admin-Banks-List-Table',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-5.png'),
        alt: 'Admin-Add-Edit-Bank-Form',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-6.png'),
        alt: 'Admin-KYC-Requests-List',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-7.png'),
        alt: 'Admin-KYC-Request-Detail-View',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-8.png'),
        alt: 'Admin-KYC-Approve-Reject-Action',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-9.png'),
        alt: 'Admin-Users-List-Table',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-10.png'),
        alt: 'Admin-User-Detail-Profile',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-11.png'),
        alt: 'Admin-Blockchain-Blocks-List',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-12.png'),
        alt: 'Admin-Blockchain-Block-Detail-Ledger',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-13.png'),
        alt: 'Admin-Certificates-List',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-14.png'),
        alt: 'Admin-Certificate-Detail-Sign',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-15.png'),
        alt: 'Admin-Audit-Log-Table',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-16.png'),
        alt: 'Admin-Keys-Management-Page',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-17.png'),
        alt: 'Admin-Security-Settings-Page',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-18.png'),
        alt: 'Admin-Alerts-Notifications-Page',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-19.png'),
        alt: 'Admin-System-Settings-Page',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-20.png'),
        alt: 'Admin-KYC-Document-Verification-Detail',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-21.png'),
        alt: 'Admin-Blockchain-Transaction-History',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-22.png'),
        alt: 'Admin-Bank-KYC-Permission-Config',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-23.png'),
        alt: 'Admin-Role-Permission-Management',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-admin-24.png'),
        alt: 'Admin-Portal-Final-Workflow-View',
      },
      // ── Customer Portal ───────────────────────────────────────────────────────
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-cust-1.png'),
        alt: 'Customer-Login-Register-Page',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-cust-2.png'),
        alt: 'Customer-Dashboard-Overview',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-cust-3.png'),
        alt: 'Customer-KYC-Submission-Form',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-cust-4.png'),
        alt: 'Customer-KYC-Document-Upload',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-cust-5.png'),
        alt: 'Customer-KYC-Verification-Status-Result',
      },
      {
        url: getGitHubImageUrl('NextJS-Blockchain-KYC', 'images/portal-cust-6.png'),
        alt: 'Customer-Certificate-Issued-View',
      },
    ],
    type: 'frontend',
    relatedProject: ['blockchain-kyc-go', 'blockchain-kyc-python']
  },
  {
    id: 'blockchain-kyc-go',
    name: 'KYC Blockchain (Go)',
    description: 'A Go-based backend service that manages Know Your Customer (KYC) records on a blockchain, where banks can submit, verify, and immutably store customer identity data. It includes JWT authentication, role-based access control, PostgreSQL storage, consensus mechanisms (PBFT/Raft), and Kubernetes deployment with Prometheus/Grafana monitoring, built using Golang Backend, which has popular community for Blockchain.',
    url: 'https://github.com/BunlongCHEA/Go-Blockchain-KYC',
    liveUrl: 'https://kycapi.bunlong.uk/health',
    technologies: ['Golang', 'PostgreSQL' , 'ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/argocd-1.png'), alt: 'ArgoCD-Repo-Overview' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/argocd-2.png'), alt: 'ArgoCD-Repo-DB' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/argocd-3.png'), alt: 'ArgoCD-Repo-APP-P1' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/argocd-4.png'), alt: 'ArgoCD-Repo-APP-P2' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/bash-1.png'), alt: 'Command-Run-App' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/cloudflare-1.png'), alt: 'Cloudflare-DNS-Deploy' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/db-1.png'), alt: 'DB-Postgres-Container-Connection' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/db-2.png'), alt: 'DB-Postgres-Container-Table' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/db-3.png'), alt: 'DB-Postgres-Container-Query' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/gitlab-1.png'), alt: 'Gitlab-CICD' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-1.png'), alt: 'Kubectl-Get-Namespace' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-2.png'), alt: 'Kubectl-Get-SVC-App' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-3.png'), alt: 'Kubectl-Get-SVC-Monitoring' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-4.png'), alt: 'Kubectl-Get-Pod-App-Monitoring' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-5.png'), alt: 'Kubectl-Get-Ingress' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-6.png'), alt: 'Kubectl-Get-Ingress-Describe-App' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-7.png'), alt: 'Kubectl-Get-Ingress-Describe-Monitoring' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/kube-8.png'), alt: 'Kubectl-Get-Certificate' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-1.png'), alt: 'Monitoring-Grafana-Home' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-1-1.png'), alt: 'Monitoring-Grafana-Dashboard' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-1-2.png'), alt: 'Monitoring-Grafana-Dashboard-K8S' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-1-5.png'), alt: 'Monitoring-Grafana-Dashboard-K8S-P2' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-1-3.png'), alt: 'Monitoring-Grafana-Dashboard-NodeExport' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-1-4.png'), alt: 'Monitoring-Grafana-Dashboard-Prometheus' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-1-3.png'), alt: 'Monitoring-Grafana-Dashboard-NodeExport' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-2.png'), alt: 'Monitoring-Prometheus' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-2-1.png'), alt: 'Monitoring-Prometheus-Target-Error' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-2-2.png'), alt: 'Monitoring-Prometheus-Target-Success' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-2-3.png'), alt: 'Monitoring-Prometheus-Target-Success-P2' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-3-1.png'), alt: 'Monitoring-Grafana-Dashboard-Postgres' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-3-2.png'), alt: 'Monitoring-Grafana-Dashboard-Postgres-Detail' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/monitoring-3-3.png'), alt: 'Monitoring-Grafana-Dashboard-Postgres-Detail-P2' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-1.png'), alt: 'Postman-Env' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-2.png'), alt: 'Postman-Login-Admin' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-3.png'), alt: 'Postman-POST-Bank' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-4.png'), alt: 'Postman-POST-kyc' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-4_1.png'), alt: 'Postman-GET-Customer-Pending' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-5_1.png'), alt: 'Postman-List-Blockchain-Pending-Ready-To-Mine' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-5_3.png'), alt: 'Postman-List-Blockchain-Pending-Ready-To-Mine-Detail' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-5_2.png'), alt: 'Postman-Success-kyc-DB-Verified' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-6.png'), alt: 'Postman-Mine-Success' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-5_4.png'), alt: 'Postman-Mine-Failed' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-5.png'), alt: 'Postman-List-Still-Any-KYC-Pending' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-7.png'), alt: 'Postman-Blockchain-Stats' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-8.png'), alt: 'Postman-Blockchain-List' },
      { url: getGitHubImageUrl('Go-Blockchain-KYC', 'images/postman-9.png'), alt: 'Postman-Blockchain-Validate' },
    ],
    type: 'backend',
    relatedProject: ['blockchain-kyc-python', 'blockchain-kyc-nextjs']
  },
  {
    id: 'blockchain-kyc-python',
    name: 'KYC Blockchain Model (Python)',
    description: 'A Python/FastAPI microservice that handles the AI-powered identity verification layer for KYC — performing OCR on Cambodian National IDs/Passports (via Google Cloud Vision + EasyOCR) and face matching between ID photos and selfies (via DeepFace/ArcFace), with CI/CD via GitHub Actions and ArgoCD on Kubernetes.',
    url: 'https://github.com/BunlongCHEA/Python-Blockchain-KYC',
    liveUrl: 'https://kyc-python-api.bunlong.uk',
    technologies: ['Python', 'PostgreSQL', 'ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/argocd-1.png'), alt: 'ArgoCD-Repo-Overview' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/argocd-2.png'), alt: 'ArgoCD-Repo-APP' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/argocd-3.png'), alt: 'ArgoCD-Repo-DB' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/argocd-4.png'), alt: 'ArgoCD-Repo-APP-Go' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/cloudflare-1.png'), alt: 'Cloudflare-DNS-Deploy' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/db-1.png'), alt: 'DB-Postgres-Container-Table' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/db-2.png'), alt: 'DB-Postgres-Container-Table-P2' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/db-3.png'), alt: 'DB-Postgres-Container-Query-KYC' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/db-4.png'), alt: 'DB-Postgres-Container-Query-KYC-P2' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/github-action-1.png'), alt: 'Github-Action-CICD' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/monitoring-1.png'), alt: 'Monitoring-Grafana-Dashboard' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/monitoring-2.png'), alt: 'Monitoring-Grafana-Dashboard-K8S' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/monitoring-3.png'), alt: 'Monitoring-Grafana-Dashboard-NodeExport' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/monitoring-4.png'), alt: 'Monitoring-Grafana-Dashboard-Prometheus' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/monitoring-5.png'), alt: 'Monitoring-Prometheus-Target-Success' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/postman-1.png'), alt: 'Postman-App-Health' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/postman-2.png'), alt: 'Postman-App-Upload-IDCard-Image' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/postman-3.png'), alt: 'Postman-App-Upload-Selfie-Image' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/postman-4.png'), alt: 'Postman-App-Overall-Scan-Result' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/postman-4.png'), alt: 'Postman-App-Overall-Scan-Result' },
      { url: getGitHubImageUrl('Python-Blockchain-KYC', 'image/web-1.png'), alt: 'Postman-App-Web-Health' },
    ],
    type: 'backend',
    relatedProject: ['blockchain-kyc-go', 'blockchain-kyc-nextjs']
  },
  {
    id: 'core-banking-system-backend',
    name: 'Core Banking System (Spring Boot)',
    description: 'A Spring Boot backend for a production-grade Core Banking System (CBS) covering customer onboarding, KYC-governed account creation, account management, and transaction processing. It integrates with a Go-based KYC blockchain service for identity verification, uses PostgreSQL with Hibernate 6 (Criteria API/Specifications), Redis-backed idempotency for transaction integrity, dynamic fee/threshold configuration via a system_settings table, and JWT authentication with multi-node Raft cluster support.',
    url: 'https://github.com/BunlongCHEA/CBS-Backend',
    liveUrl: 'https://cbsapi.bunlong.uk/health',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('CBS-Backend', 'images/accounts-1.png'), alt: 'CBS-Accounts-Module-Overview' },
      { url: getGitHubImageUrl('CBS-Backend', 'images/transactions-1.png'), alt: 'CBS-Transactions-Module-Overview' },
    ],
    type: 'backend',
    relatedProject: 'core-banking-system-frontend',
  },
  {
    id: 'core-banking-system-frontend',
    name: 'Core Banking System (Next.js)',
    description: 'A Next.js frontend for the Core Banking System, providing KYC-governed customer onboarding flows, an accounts dashboard with new-account creation, freeze/unfreeze/close actions, and a transactions module with live account-number preview, customer-name-based history search, and currency-precision-aware amount entry. Communicates with the Spring Boot CBS backend and the Go-based KYC blockchain service.',
    url: 'https://github.com/BunlongCHEA/CBS-Frontend',
    liveUrl: 'https://cbs.bunlong.uk',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('CBS-Frontend', 'images/onboarding-1.png'), alt: 'CBS-KYC-Onboarding-Dialog' },
      { url: getGitHubImageUrl('CBS-Frontend', 'images/accounts-ui-1.png'), alt: 'CBS-Accounts-Page-UI' },
    ],
    type: 'frontend',
    relatedProject: 'core-banking-system-backend',
  },
  {
    id: 'ecommerce-dotnet',
    name: 'E-commerce (.NET)',
    description: 'Robust e-commerce backend built with ASP.NET Core, featuring JWT authentication, Entity Framework, and comprehensive API endpoints.',
    url: 'https://github.com/BunlongCHEA/Ecommerce-DotNet',
    liveUrl: 'https://ecommerceapi.bunlong.uk/swagger',
    technologies: ['C#', '.NET', 'SQL Server', 'MongoDB','ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_1.png'), alt: 'ArgoCD-Login' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_2.png'), alt: 'ArgoCD-Repo' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_3.png'), alt: 'ArgoCD-Project' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_4.png'), alt: 'ArgoCD-Project-SQLServer' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_5.png'), alt: 'ArgoCD-Project-MongoDB' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_6.png'), alt: 'ArgoCD-Project-Backend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_7.png'), alt: 'ArgoCD-Project-Frontend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/cloudflare_1.png'), alt: 'Cloudflare-Backend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/cloudflare_2.png'), alt: 'Cloudflare-Frontend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/k8s_1.png'), alt: 'Kubernetes-Namespace' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/k8s_2.png'), alt: 'Kubernetes-Ingress' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/web_1.png'), alt: 'Web-Backend-Swagger' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/web_2.png'), alt: 'Web-Frontend-Login' },
    ],
    type: 'backend',
    relatedProject: 'ecommerce-vue'
  },
  {
    id: 'ecommerce-vue',
    name: 'E-commerce (Vue.js)',
    description: 'Modern e-commerce frontend with Vue.js, Vuex for state management, and responsive design.',
    url: 'https://github.com/BunlongCHEA/Ecommerce-Vue',
    liveUrl: 'https://ecommercevue.bunlong.uk',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_1.png'), alt: 'ArgoCD-Login' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_2.png'), alt: 'ArgoCD-Repo' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_3.png'), alt: 'ArgoCD-Project' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_4.png'), alt: 'ArgoCD-Project-Frontend' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_1.png'), alt: 'Login' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_2.png'), alt: 'User-Product-Page-with-logo' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_3.png'), alt: 'User-Product-Filter-with-more-products' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_4.png'), alt: 'User-Product-Detail' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_5.png'), alt: 'User-Cart-Summary-all-stores' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_5_1.png'), alt: 'User-Cart-Detail-each-store' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_6.png'), alt: 'User-Location' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_7.png'), alt: 'User-Payment' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_7_1.png'), alt: 'User-Payment-Add-With-Validity-CardNumber' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_8.png'), alt: 'User-Coupon-Add-Code' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_9.png'), alt: 'User-Order-Success' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_10.png'), alt: 'User-Order-Success-Detail' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_11.png'), alt: 'User-Order-Success-Arrived' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_12.png'), alt: 'User-Order-History-Completed-With-Other-Order-Pending' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_13.png'), alt: 'User-Chat' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_14.png'), alt: 'User-Profiles' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_1.png'), alt: 'Admin-Order-Status-Detail-Product' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_2.png'), alt: 'Admin-Order-Change-Status-Arrived' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_3.png'), alt: 'Admin-Product-List-With-either-Add-Single-or-Batch-Products' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_4.png'), alt: 'Admin-Chat' },
    ],
    type: 'frontend',
    relatedProject: 'ecommerce-dotnet'
  },
  {
    id: 'springboot-chat',
    name: 'Real-Time Chat (Spring Boot)',
    description: 'Real-time chat application with WebSocket integration, built using Spring Boot and modern web technologies.',
    url: 'https://github.com/BunlongCHEA/SpringBoot-RealTimeChat',
    liveUrl: 'https://chatspringboot.bunlong.uk',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL','ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/argocd_1.png'), alt: 'ArgoCD-Repo' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/argocd_2.png'), alt: 'ArgoCD-Project' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/argocd_3.png'), alt: 'ArgoCD-Project-MongoDB' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/argocd_4.png'), alt: ' ArgoCD-Project-Postgres' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/argocd_5.png'), alt: 'ArgoCD-Project-Backend' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/cloudflare_1.png'), alt: 'Cloudflare-Backend' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/k8s_1.png'), alt: 'Kubernetes-Namespace' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/k8s_2.png'), alt: 'Kubernetes-Pod-In-ns-Production' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/k8s_3.png'), alt: 'Kubernetes-Ingress' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/firebase_1.png'), alt: 'Firebase-Register-Name' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/firebase_2.png'), alt: 'Firebase-Register-Add-SDK' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/firebase_3.png'), alt: 'Firebase-Register-CLI' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/firebase_4.png'), alt: 'Firebase-Register-Deploy' },
      { url: getGitHubImageUrl('SpringBoot-RealTimeChat', 'images/web_1.png'), alt: 'Web-Backend-Swagger' },
    ],
    type: 'backend',
    relatedProject: 'nextjs-chat'
  },
  {
    id: 'nextjs-chat',
    name: 'Real-Time Chat (Next.js)',
    description: 'Real-time chat application with WebSocket integration, built using NextJS and modern web technologies.',
    url: 'https://github.com/BunlongCHEA/NextJS-RealTimeChat',
    liveUrl: 'https://chatnextjs.bunlong.uk',
    technologies: ['Next.js', 'TypeScript', 'React', 'Firebase','ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/argocd_1.png'), alt: 'ArgoCD-Repo' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/argocd_2.png'), alt: 'ArgoCD-Project' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/argocd_3.png'), alt: 'ArgoCD-Project-Frontend' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/cloudflare_1.png'), alt: 'Cloudflare-Frontend' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_1.png'), alt: 'User-Login' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_3.png'), alt: 'Chat-Front-Page' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_4.png'), alt: 'Chat-Message-with-Another-User' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_5.png'), alt: 'Chat-Menu' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_6.png'), alt: 'Chat-Create-Group-with-Add-Friend-and-External-Memeber' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_7.png'), alt: 'Chat-Create-Channel-with-Add-Friend' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_7_1.png'), alt: 'Chat-Create-Channel-with-Add-External-Memeber' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_8.png'), alt: 'Chat-Access-Group-with-Other-Menu-Options' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_9.png'), alt: 'Chat-Access-Channel-with-Other-Menu-Options' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_10.png'), alt: 'Chat-Admin-Leave-Must-Promote-Role-to-Another-Member-First' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_10_1.png'), alt: 'Chat-Result-After-Admin-Leave' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_11.png'), alt: 'Chat-Firebase-Allow-Web-Push-Notification' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_12.png'), alt: 'Chat-Firebase-Notification-Page1' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_13.png'), alt: 'Chat-Firebase-Notification-Page2' },
      { url: getGitHubImageUrl('NextJS-RealTimeChat', 'images/web_health.png'), alt: 'Chat-Health-Status-Code-200' },
    ],
    type: 'frontend',
    relatedProject: 'springboot-chat'
  },
  {
    id: 'nextjs-portfolio',
    name: 'My Portfolio (Next.js)',
    description: 'Personal portfolio website built with Next.js, featuring modern animations and responsive design.',
    url: 'https://github.com/BunlongCHEA/NextJS_Portfolio',
    liveUrl: 'https://myportfolio.bunlong.uk',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS','ArgoCD', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('NextJS_Portfolio', 'images/argocd/argocd_1.png'), alt: 'ArgoCD-Project-Deployment' },
      { url: getGitHubImageUrl('NextJS_Portfolio', 'images/argocd/argocd_2.png'), alt: 'ArgoCD-Project-Details' },
      { url: getGitHubImageUrl('NextJS_Portfolio', 'images/argocd/cloudflare_1.png'), alt: 'Cloudflare-DNS' },
      { url: getGitHubImageUrl('NextJS_Portfolio', 'images/argocd/k8s_1.png'), alt: 'K8S-Namespace' },
      { url: getGitHubImageUrl('NextJS_Portfolio', 'images/argocd/k8s_2.png'), alt: 'K8S-Pod-1' },
      { url: getGitHubImageUrl('NextJS_Portfolio', 'images/argocd/portfolio_1.png'), alt: 'Web-My-Portfolio' },
    ],
    type: 'frontend',
    headerTitle: 'FrontEnd Project'
  },
  {
    id: 'gym-dotnet',
    name: 'Gym Management (.NET)',
    description: 'Robust gym management fullstack built with ASP.NET Core, featuring JWT authentication, Entity Framework, and interactive Bootstrap GUI endpoints.',
    url: 'https://github.com/BunlongCHEA/ASP.Net_GymManagement',
    liveUrl: 'https://gymdotnet.bunlong.uk',
    technologies: ['C#', '.NET', 'SQL Server', 'Bootstrap', 'Jenkins', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      // { url: '/images/gym-dotnet-1.png', alt: 'API Documentation' },
      // { url: '/images/gym-dotnet-2.png', alt: 'Database Schema' },
    ],
    type: 'fullstack',
    headerTitle: 'Full Stack Project'
  },
  {
    id: 'cuisine-laravel',
    name: 'Order Cuisine (Laravel)',
    description: 'Robust Order food fullstack built with Laravel, and interactive Bootstrap GUI endpoints.',
    url: 'https://github.com/BunlongCHEA/Laravel_Online_Cuisine',
    liveUrl: 'https://cuisinelaravel.bunlong.uk',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Bootstrap', 'Jenkins', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      // { url: '/images/cuisine-laravel-1.png', alt: 'API Documentation' },
      // { url: '/images/cuisine-laravel-2.png', alt: 'Database Schema' },
    ],
    type: 'fullstack',
    headerTitle: 'Full Stack Project'
  },
  
];