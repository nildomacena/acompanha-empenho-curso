import { Injectable } from '@nestjs/common';
import { Empenho } from './entities/empenho.entity';

@Injectable()
export class EmpenhosService {
    private empenhos: Empenho[] = [
        {
            id: 1,
            fornecedor: 'Machado Armarinhos',
            descricao: 'Material de expediente',
            data: new Date(),
            numero: '2022NE232',
            valor: 400
        },
        {
            id: 2,
            fornecedor: 'Veloo Internet',
            descricao: 'Internet',
            data: new Date(),
            numero: '2022NE234',
            valor: 500
        },
        {
            id: 3,
            fornecedor: 'Fulano de Tal',
            descricao: 'Material de expediente',
            data: new Date(),
            numero: '2022NE232',
            valor: 400
        },
        {
            id: 4,
            fornecedor: 'Cicrano de tal',
            descricao: 'Material de expediente',
            data: new Date(),
            numero: '2022NE232',
            valor: 400
        },
    ]
}
