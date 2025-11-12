# Arquitetura do Projeto - Princípios SOLID e Clean Code

Este documento descreve a arquitetura do projeto, focando na aplicação dos princípios SOLID e Clean Code, especialmente o **Princípio de Inversão de Dependência (DIP)**.

## 📐 Princípio de Inversão de Dependência (DIP)

**"Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações."**

### Estrutura de Dependências

```
Componentes (Alto Nível)
    ↓ depende de
Interfaces/Abstrações
    ↑ implementado por
Implementações Concretas (Baixo Nível)
```

## 🏗️ Arquitetura Implementada

### 1. **Camada de Interfaces** (`src/services/interfaces/`, `src/repositories/interfaces/`)

Interfaces que definem contratos, não implementações:

- `EmailService.interface.ts` - Contrato para envio de emails
- `ScrollService.interface.ts` - Contrato para scroll suave
- `DOMService.interface.ts` - Contrato para manipulação do DOM
- `ConfigService.interface.ts` - Contrato para configurações
- `ProjectsRepository.interface.ts` - Contrato para repositório de projetos
- `SkillsRepository.interface.ts` - Contrato para repositório de skills

### 2. **Camada de Implementações** (`src/services/implementations/`, `src/repositories/implementations/`)

Implementações concretas que satisfazem as interfaces:

- `EmailJSService.implementation.ts` - Implementação usando EmailJS
- `BrowserScrollService.implementation.ts` - Implementação para scroll no browser
- `BrowserDOMService.implementation.ts` - Implementação para DOM do browser
- `ViteConfigService.implementation.ts` - Implementação usando variáveis de ambiente do Vite
- `LocalProjectsRepository.implementation.ts` - Implementação usando dados locais
- `LocalSkillsRepository.implementation.ts` - Implementação usando dados locais

### 3. **Camada de Componentes** (`src/components/`)

Componentes React que dependem apenas de abstrações:

- `Contact.tsx` → depende de `EmailService` (interface)
- `Hero.tsx`, `Header.tsx` → dependem de `ScrollService` (via `scrollUtils`)
- `Projects.tsx` → depende de `ProjectsRepository` (interface)
- `Skills.tsx` → depende de `SkillsRepository` (interface)

### 4. **Factory Pattern** (`src/services/index.ts`, `src/repositories/index.ts`)

Factories que criam e fornecem instâncias dos serviços e repositórios:

- `getEmailService()` - Retorna instância de `EmailService`
- `getScrollService()` - Retorna instância de `ScrollService`
- `getProjectsRepository()` - Retorna instância de `ProjectsRepository`
- `getSkillsRepository()` - Retorna instância de `SkillsRepository`

## ✅ Benefícios da Arquitetura

### 1. **Testabilidade**
- Fácil criar mocks das interfaces para testes
- Componentes podem ser testados isoladamente

### 2. **Flexibilidade**
- Trocar EmailJS por outro serviço? Apenas criar nova implementação
- Trocar dados locais por API? Apenas criar novo repositório
- Trocar Vite por outro bundler? Apenas criar novo ConfigService

### 3. **Manutenibilidade**
- Mudanças em implementações não afetam componentes
- Código organizado e fácil de entender

### 4. **Extensibilidade**
- Adicionar novos serviços/repositórios sem modificar código existente
- Segue o princípio Open/Closed (aberto para extensão, fechado para modificação)

## 📊 Fluxo de Dependências

```
Component (Contact.tsx)
    ↓ usa
EmailService (interface)
    ↑ implementado por
EmailJSService (implementação concreta)
    ↓ usa
ConfigService (interface)
    ↑ implementado por
ViteConfigService (implementação concreta)
```

## 🔄 Exemplo de Uso

### Antes (Violando DIP):
```typescript
// Contact.tsx dependia diretamente de emailjs
import emailjs from '@emailjs/browser';
await emailjs.send(...);
```

### Depois (Seguindo DIP):
```typescript
// Contact.tsx depende apenas da interface
import { getEmailService } from '../services';
const emailService = getEmailService();
await emailService.sendEmail(...);
```

## 🎯 Princípios Aplicados

### ✅ Single Responsibility Principle (SRP)
- Cada classe/componente tem uma única responsabilidade
- EmailService: apenas envio de emails
- ScrollService: apenas scroll
- Repositórios: apenas acesso a dados

### ✅ Open/Closed Principle (OCP)
- Abierto para extensão (novas implementações)
- Fechado para modificação (componentes não precisam mudar)

### ✅ Liskov Substitution Principle (LSP)
- Qualquer implementação de uma interface pode substituir outra

### ✅ Interface Segregation Principle (ISP)
- Interfaces específicas e focadas
- Não há interfaces "gordurosas"

### ✅ Dependency Inversion Principle (DIP)
- Componentes dependem de abstrações, não de implementações concretas
- Implementações concretas dependem de abstrações

## 🚀 Próximos Passos Possíveis

1. **Adicionar testes unitários** usando mocks das interfaces
2. **Criar implementações alternativas**:
   - `APIConfigService` para usar API ao invés de env vars
   - `APIGetProjectsRepository` para buscar projetos de uma API
   - `MockEmailService` para testes
3. **Adicionar Dependency Injection Container** (opcional, para projetos maiores)

