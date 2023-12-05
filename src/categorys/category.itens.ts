import { TCategoryItem } from '../types/categoryItem.type';

import cftvImage from '../images/categorys/ctfv.png';
import catracas from '../images/categorys/catracas.png';
import acesso from '../images/categorys/acesso.png';
import interfone from '../images/categorys/interfone.png';

export const categoryItens: Array<TCategoryItem> = [
    {
        image: cftvImage,
        category: 'CFTV',
        description: 'Tudo o que você precisa para o manitoramento de vídeo da sua propriedade. Câmeras de segurança, DVRs, acessórios e muito mais.'
    },
    {
        image: catracas,
        category: 'Catracas',
        description: 'Controle o fluxo de funcionários e pessoas que visitam a sua empresa. Ideal para recepções de condomínios, ambientes corporativos e academias.'
    },
    {
        image: acesso,
        category: 'Controle biométrico',
        description: 'Controle quem pode ter acesso a ambientes específicos da sua empresa, garantindo a segurança do ambiente corporativo. Ideal para recepções, escritórios, salas de reunião e estacionamentos.'
    },
    {
        image: interfone,
        category: 'Interfones',
        description: 'Identifique os seus visitantes sem precisar se expor, podendo abrir portões sem sair do seu ambiente interno. Ideal para empresas e residências.'
    }
];