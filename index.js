

function start() {
  console.log(classes.filter((elem) => elem.day === today));
  
}

const classes = [
  {'day': 'Segunda-feira', 'classes': [
    'Manutenção',
    'Manutenção',
    'Manutenção',
    'Intervalo',
    'Inglês',
    'Inglês',
    'Almoço',
    'História',
    'História',
    'História'    
  ]},
  {'day': 'Terça-feira', 'classes': [
    'Empreendedorismo',
    'Empreendedorismo',
    'Matemática',
    'Intervalo',
    'Filosofia',
    'Educação Física',
    'Almoço',
    'Português',
    'Geografia',
  ]},
  {'day': 'Quarta-feira', 'classes': [
    'Matemática',
    'Normas de segurança em instalações elétricas',
    'Normas de segurança em instalações elétricas',
    'Intervalo',
    'Normas de segurança em instalações elétricas',
    'Controle e automação',
    'Almoço',
    'Controle e automação',
    'TCC',
    'TCC'    
  ]},
  {'day': 'Quinta-feira', 'classes': [
    'Sociologia',
    'Português',
    'Controle e automação',
    'Intervalo',
    'Português',
    'Português',
    'Almoço',
    'Biologia',
    'Biologia',
  ]},
  {'day': 'Sexta-feira', 'classes': [
    'Geografia',
    'Matemática',
    'Matemática',
    'Intervalo',
    'Educação Física',
    'Ética',
    'Almoço',
  ]},
  {'day': 'Sábado', 'classes': 'Sem aula hoje, decanse!'},
  {'day': 'Domingo', 'classes': 'Sem aula hoje, decanse!'}
]
const date = new Date();
const weekdays = {
  0: 'Domingo',
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado'
}
const dayIndex = date.getDay()
const today = weekdays[dayIndex]

start()