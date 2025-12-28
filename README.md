# 🍅 Pomotimer

Aplicação web de gerenciamento de tarefas com a técnica Pomodoro, desenvolvida em React + TypeScript.

## 📋 Sobre o Projeto

O Pomotimer é uma aplicação que combina gerenciamento de tarefas com a técnica Pomodoro, ajudando usuários a manterem o foco e produtividade através de intervalos cronometrados de trabalho.

## ✨ Funcionalidades

### 🏠 Página Inicial (Home)

A página inicial exibe a lista de tarefas do usuário com as seguintes funcionalidades:

#### Gerenciamento de Tarefas
- **Adicionar Tarefa**: Botão dedicado que abre um formulário para criar novas tarefas
  - Campos: Título, Descrição (opcional), Pomodoros Estimados
- **Visualizar Tarefas**: Cards que exibem informações da tarefa
  - Título e descrição
  - Barra de progresso (pomodoros completados / estimados)
  - Porcentagem de conclusão
- **Marcar como Concluída**: Switch no card para alternar status de conclusão
- **Editar Tarefa**: Botão que substitui o card por um formulário de edição
  - Permite alterar título, descrição e pomodoros estimados
- **Remover Tarefa**: Botão para deletar a tarefa (baseado no ID)

#### Navegação para Pomodoro
- **Card Clicável**: Clicar no card da tarefa navega para a página do Pomodoro
  - A tarefa selecionada se torna a tarefa ativa do temporizador

### ⏱️ Página do Pomodoro

Página dedicada para executar a técnica Pomodoro na tarefa selecionada:

#### Controles do Timer
- **Iniciar**: Começa a contagem do pomodoro
- **Pausar**: Pausa o timer atual
- **Skippar**: Pula para o próximo intervalo (pausa ou pomodoro)
- **Voltar**: Botão para retornar à tela de tarefas

#### Informações Exibidas
- Timer visual com contagem regressiva
- Informações da tarefa ativa
- Indicador de qual pomodoro está em andamento
- Status (pomodoro, intervalo curto ou intervalo longo)

### ⚙️ Página de Configurações

Permite ao usuário personalizar a experiência:

#### Configurações de Tema
- **Tema**: Alternância entre tema claro e escuro

#### Configurações de Tempo
- **Tempo de Pomodoro**: Duração de cada sessão de trabalho (padrão: 25 min)
- **Intervalo Pequeno**: Duração do intervalo curto entre pomodoros (padrão: 5 min)
- **Intervalo Grande**: Duração do intervalo longo após 4 pomodoros (padrão: 15 min)

### 📊 Página de Estatísticas

Dashboard com métricas de produtividade do usuário:

#### Métricas Principais
- **Pomodoros Realizados**: Total de pomodoros completados
- **Tarefas Concluídas**: Quantidade de tarefas finalizadas
- **Tarefas Restantes**: Quantidade de tarefas pendentes
- **Tempo Total de Foco**: Horas acumuladas em pomodoros
- **Taxa de Conclusão**: Percentual de tarefas concluídas

#### Visualizações
- Gráficos de progresso
- Histórico de atividades
- Análise de produtividade por período

## 🗂️ Estrutura do Projeto

```
src/
├── components/
│   ├── homepage/
│   │   └── Tasks/          # Componentes de gerenciamento de tarefas
│   │       ├── TaskCard.tsx    # Card individual de tarefa
│   │       ├── TaskForm.tsx    # Formulário de criação/edição
│   │       └── Tasks.tsx       # Container e lógica principal
│   └── layout/
│       ├── Navbar.tsx      # Barra de navegação
│       └── Footer.tsx      # Rodapé
├── pages/
│   ├── Home.tsx           # Página inicial (lista de tarefas)
│   ├── Settings.tsx       # Página de configurações
│   └── Statistics.tsx     # Página de estatísticas
├── models/
│   └── Task.ts           # Interface/tipo da Task
└── App.tsx               # Componente raiz com rotas
```

## 🔄 Fluxo de Uso

1. **Criar Tarefa**: Usuário adiciona uma nova tarefa com título e número estimado de pomodoros
2. **Selecionar Tarefa**: Clica no card da tarefa para iniciar o pomodoro
3. **Executar Pomodoro**: Inicia o timer e trabalha focado na tarefa
4. **Intervalo**: Após cada pomodoro, sistema sugere pausa curta ou longa
5. **Progresso**: Ao completar pomodoros, a barra de progresso da tarefa é atualizada
6. **Conclusão**: Marca tarefa como concluída quando finalizada
7. **Estatísticas**: Visualiza métricas de produtividade acumuladas

## 💾 Persistência de Dados

- **LocalStorage**: Tarefas são salvas localmente no navegador
- **Sincronização automática**: Dados persistem entre sessões

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface
- **TypeScript**: Tipagem estática para JavaScript
- **React Router**: Navegação entre páginas
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Biblioteca de ícones
- **Vite**: Build tool e dev server

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📝 Modelo de Dados

### Task (Tarefa)

```typescript
interface Task {
  id: string;                  // Identificador único
  title: string;               // Título da tarefa
  description?: string;        // Descrição opcional
  completed: boolean;          // Status de conclusão
  pomodorosCompleted: number;  // Pomodoros já realizados
  estimatedPomodoros: number;  // Pomodoros estimados para conclusão
}
```

## 🎯 Próximos Passos

- [ ] Implementar página do Pomodoro com timer funcional
- [ ] Adicionar notificações sonoras ao fim de cada período
- [ ] Implementar sistema de configurações persistentes
- [ ] Criar dashboard de estatísticas com gráficos
- [ ] Adicionar tema claro/escuro
- [ ] Implementar histórico de sessões de pomodoro
- [ ] Adicionar categorias/tags para tarefas
- [ ] Sistema de conquistas/gamificação

## 📄 Licença

Este projeto está sob desenvolvimento pessoal.

---

Desenvolvido com ❤️ e ☕ usando a técnica Pomodoro