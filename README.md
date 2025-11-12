# Portfólio

Um portfólio moderno e responsivo criado com React, TypeScript e Vite.

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- React Router DOM
- EmailJS (para envio de emails)

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

## 📦 Build

```bash
npm run build
```

## 🔍 Preview

```bash
npm run preview
```

## 📧 Configuração do EmailJS

Para que o formulário de contato envie emails para seu endereço, você precisa configurar o EmailJS:

1. **Criar conta no EmailJS**: Acesse [https://www.emailjs.com/](https://www.emailjs.com/) e crie uma conta gratuita (200 emails/mês no plano gratuito)

2. **Criar um serviço de email**:
   - No dashboard do EmailJS, vá em "Email Services"
   - Adicione um serviço (Gmail, Outlook, etc.)
   - Siga as instruções para conectar seu email

3. **Criar um template de email**:
   - Vá em "Email Templates"
   - Crie um novo template com os seguintes campos:
     - `{{from_name}}` - Nome do remetente
     - `{{from_email}}` - Email do remetente
     - `{{message}}` - Mensagem
     - `{{to_email}}` - Email destinatário (gzontinha@gmail.com)
   - Configure o assunto: "Nova mensagem do portfólio de {{from_name}}"
   - Configure o corpo: "Mensagem de {{from_name}} ({{from_email}}):\n\n{{message}}"

4. **Criar arquivo .env**:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as seguintes variáveis:
     ```
     VITE_EMAILJS_SERVICE_ID=seu_service_id
     VITE_EMAILJS_TEMPLATE_ID=seu_template_id
     VITE_EMAILJS_PUBLIC_KEY=sua_public_key
     ```
   - Substitua pelos valores que você encontra no dashboard do EmailJS

5. **Reiniciar o servidor**: Após criar o arquivo `.env`, reinicie o servidor de desenvolvimento

⚠️ **Importante**: O arquivo `.env` não deve ser commitado no Git (já está no .gitignore)

