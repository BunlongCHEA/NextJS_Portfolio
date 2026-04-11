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
  relatedProject?: string; // ID of related project (frontend/backend pair)
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
    id: 'ecommerce-dotnet',
    name: 'E-commerce (.NET)',
    description: 'Robust e-commerce backend built with ASP.NET Core, featuring JWT authentication, Entity Framework, and comprehensive API endpoints.',
    url: 'https://github.com/BunlongCHEA/Ecommerce-DotNet',
    liveUrl: 'https://ecommerceapi.bunlong.site/swagger',
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
    liveUrl: 'https://ecommercevue.bunlong.site',
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
    id: 'nextjs-portfolio',
    name: 'My Portfolio (Next.js)',
    description: 'Personal portfolio website built with Next.js, featuring modern animations and responsive design.',
    url: 'https://github.com/BunlongCHEA/NextJS_Portfolio',
    liveUrl: 'https://myportfolio.bunlong.site',
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
    id: 'springboot-chat',
    name: 'Real-Time Chat (Spring Boot)',
    description: 'Real-time chat application with WebSocket integration, built using Spring Boot and modern web technologies.',
    url: 'https://github.com/BunlongCHEA/SpringBoot-RealTimeChat',
    liveUrl: 'https://chatspringboot.bunlong.site',
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
    liveUrl: 'https://chatnextjs.bunlong.site',
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
    id: 'ansible-automation',
    name: 'Kubernetes - Rancher - ArgoCD - VM (Ansible Automation)',
    description: 'Build with Ansible Automation to deploy Kubernetes cluster with Rancher and ArgoCD on VMs. Fully automated CI/CD pipeline for application deployment and management.',
    url: 'https://github.com/BunlongCHEA/Ansible-Playbook-Role',
    liveUrl: [
      'https://argocd.bunlong.site',
      'https://rancher.bunlong.site'
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
      'https://argocd.bunlong.site',
      'https://rancher.bunlong.site'
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
    ],
    type: 'automation',
    headerTitle: 'Terraform + Ansible Automation & Infrastructure Project'
  },
  {
    id: 'blockchain-kyc-go',
    name: 'KYC Blockchain (Go)',
    description: 'A Go-based backend service that manages Know Your Customer (KYC) records on a blockchain, where banks can submit, verify, and immutably store customer identity data. It includes JWT authentication, role-based access control, PostgreSQL storage, consensus mechanisms (PBFT/Raft), and Kubernetes deployment with Prometheus/Grafana monitoring, built using Golang Backend, which has popular community for Blockchain.',
    url: 'https://github.com/BunlongCHEA/Go-Blockchain-KYC',
    liveUrl: 'https://kycapi.bunlong.site',
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
    relatedProject: 'blockchain-kyc-python'
  },
  {
    id: 'blockchain-kyc-python',
    name: 'KYC Blockchain Model (Python)',
    description: 'A Python/FastAPI microservice that handles the AI-powered identity verification layer for KYC — performing OCR on Cambodian National IDs/Passports (via Google Cloud Vision + EasyOCR) and face matching between ID photos and selfies (via DeepFace/ArcFace), with CI/CD via GitHub Actions and ArgoCD on Kubernetes.',
    url: 'https://github.com/BunlongCHEA/Python-Blockchain-KYC',
    liveUrl: 'https://kycapi.bunlong.site',
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
    relatedProject: 'blockchain-kyc-go'
  },
  {
    id: 'gym-dotnet',
    name: 'Gym Management (.NET)',
    description: 'Robust gym management fullstack built with ASP.NET Core, featuring JWT authentication, Entity Framework, and interactive Bootstrap GUI endpoints.',
    url: 'https://github.com/BunlongCHEA/ASP.Net_GymManagement',
    liveUrl: 'https://gymdotnet.bunlong.site',
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
    liveUrl: 'https://cuisinelaravel.bunlong.site',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Bootstrap', 'Jenkins', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      // { url: '/images/cuisine-laravel-1.png', alt: 'API Documentation' },
      // { url: '/images/cuisine-laravel-2.png', alt: 'Database Schema' },
    ],
    type: 'fullstack',
    headerTitle: 'Full Stack Project'
  },
  
];