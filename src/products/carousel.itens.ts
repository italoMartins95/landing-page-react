import { TCategoryItem } from '../types/categoryItem.type';

import cftvImage from '../images/products/camera_hilook.png';
import catraca from '../images/products/catraca_idblock.png';
import acesso from '../images/products/idFlex.webp';
import interfone from '../images/products/interfone.png';
import motor from '../images/products/motorDeslizante.png';
import alarme from '../images/products/central-de-alarme.png';

export const carrouselItens: Array<TCategoryItem> = [
    {
        image: cftvImage,
        category: 'CFTV',
        description: 'Tudo o que você precisa para o manitoramento de vídeo da sua propriedade. Câmeras de segurança, DVRs, acessórios e muito mais.'
    },
    {
        image: catraca,
        category: 'Catracas',
        description: 'Controle o fluxo de funcionários e pessoas que visitam a sua empresa. Ideal para recepções de condomínios, ambientes corporativos e academias.'
    },
    {
        image: acesso,
        category: 'Controladores de acesso',
        description: 'Controle quem pode ter acesso a ambientes específicos da sua empresa, garantindo a segurança do ambiente corporativo. Ideal para recepções, escritórios, salas de reunião e estacionamentos.'
    },
    {
        image: interfone,
        category: 'Interfones e fechaduras',
        description: 'Identifique os seus visitantes sem precisar se expor, podendo abrir portões sem sair do seu ambiente interno. Ideal para empresas e residências.'
    },
    {
        image: motor,
        category: 'Motores automaticos',
        description: 'Controle a entrada de veículos, da sua empresa ou da sua casa, de forma automática, rápida e eficiente. Ideal para condomínios, empresas com garagem e casas.'
    },
    {
        image: alarme,
        category: 'Alarmes',
        description: 'Detector de intrusos com acionamento de sirenes e discador telefônico para informar ao responsável do local. Ideal para empresas e residências.'
    }
];