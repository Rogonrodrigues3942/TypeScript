import {areaCircunferencia} from './circunferencia'
import {areaCircunferencia as circ} from './circunferencia' //* utilizando o conceito de alias
// import {areaRetangulo} from './retangulo'
import ret from './retangulo'
import quad from './quadrado'

console.log(`Área da circunferência invocada de maneira padrão: ${areaCircunferencia(10)}`)
console.log(`Área da circunferência invocada com alias: ${circ(20)}`)
console.log(`Área do retângulo utilizando export default: ${ret(10, 2.5)}`)
console.log(`Área do quadrado sendo invocado com export default e função anônima: ${quad(10)}`)