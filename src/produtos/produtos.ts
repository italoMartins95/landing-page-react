import { IProdutos } from "../interfaces/produto.interface";

import camera_hilook from './../images/products/camera_hilook.png';
import camera_bullet from './../images/products/camera_bullet.png';
import camera_bullet_wifi from './../images/products/camera_bullet_wifi.png';
import dvr from './../images/products/dvr.png';
import catraca_idblock from './../images/products/catraca_idblock.png';
import catraca_fit_3_urna from './../images/products/catraca_fit_3_urna.png';
import catraca_fit_3_antipanico from './../images/products/catraca_fit_3_antipanico.png';
import idFlex from './../images/products/idFlex.webp';
import interfone_intelbras from './../images/products/interfone_intelbras.png';
import interfone_video_intelbras from './../images/products/interfone_video_intelbras.png';
import videoporteiro_prox from './../images/products/videoporteiro_prox.png';
import fechadura_eletrica_intelbras from './../images/products/fechadura_eletrica_intelbras.png';
import kdz_tsi from './../images/products/kdz_tsi.png';
import central_de_alarme from './../images/products/central-de-alarme.png';
import controles_radiofrequencia from './../images/products/controles_radiofrequencia.png';
import sensor_infravermelho from './../images/products/sensor_infravermelho.png';
import fechadura_eletromagnetica from './../images/products/fechadura_eletromagnetica.png';
import fechadura_eletronica_intelbras_1 from './../images/products/fechadura_eletronica_intelbras_1.png';


export const produtosCFTV: Array<IProdutos> = [
    {
        id: 1,
        name: "Câmera Dome 720p ambientes internos infravermelho para visão noturna",
        category: "CFTV",
        media: camera_hilook
    },
    {
        id: 2,
        name: "Câmera Bullet HD ambientes externos infravermelho para visão noturna",
        category: "CFTV",
        media: camera_bullet
    },
    {
        id: 3,
        name: "Câmera IP wi-fi ambientes externos infravermelho para visão noturna",
        category: "CFTV",
        media: camera_bullet_wifi
    },
    {
        id: 4,
        name: "DVR’s 8 e 16 canais para manitoramento e armazenamento de vídeo em vários ambientes",
        category: "CFTV",
        media: dvr
    }
]

export const produtosAccess: Array<IProdutos> = [
    {
        id: 5,
        name: "Catraca bio/prox para controle de acesso a ambientes empresariais",
        category: "Catracas e controladores de acesso",
        media: catraca_idblock
    },
    {
        id: 6,
        name: "Catraca bio/prox com urna para controle de visitantes",
        category: "Catracas e controladores de acesso",
        media: catraca_fit_3_urna
    },
    {
        id: 7,
        name: "Catraca bio/prox com acionamento antipanico para emergências",
        category: "Catracas e controladores de acesso",
        media: catraca_fit_3_antipanico
    },
    {
        id: 8,
        name: "Controlador de acesso bio/prox para controle de acesso a portas, portões, estacionamentos etc",
        category: "Catracas e controladores de acesso",
        media: idFlex
    },
    {
        id: 9,
        name: "Fechadura eletrônica com acionamento por proximidade ou senha",
        category: "Catracas e controladores de acesso",
        media: fechadura_eletronica_intelbras_1
    },
    {
        id: 10,
        name: "Fechadura com acionamento de eletromagnético",
        category: "Catracas e controladores de acesso",
        media: fechadura_eletromagnetica
    }
]

export const produtosInterfone: Array<IProdutos> = [
    {
        id: 11,
        name: "Porteiro residêncial eletrônico com acionamento de fechadura",
        category: "Interfones",
        media: interfone_intelbras
    },
    {
        id: 12,
        name: "Porteiro eletrônico residêncial com câmera e acionamento de fechadura ",
        category: "Interfones",
        media: interfone_video_intelbras
    },
    {
        id: 13,
        name: "Porteiro eletrônico residêncial com câmera, proximidade e acionamento de fechaduras",
        category: "Interfones",
        media: videoporteiro_prox
    },
    {
        id: 14,
        name: "Fechadura eletromecanica com acionamento eletrônico e por chave",
        category: "Interfones",
        media: fechadura_eletrica_intelbras
    }
]

export const produtosMotors: Array<IProdutos> = [
    {
        id: 15,
        name: "Motor deslizante para pora portões de pequeno e medio porte",
        category: "Motores e alarmes",
        media: kdz_tsi
    },
    {
        id: 16,
        name: "Controle remoto para acionamento de motores a distância",
        category: "Motores e alarmes",
        media: controles_radiofrequencia
    },
    {
        id: 17,
        name: "Central de alarme para monitoramento de entradas não autorizadas a propriedades privadas",
        category: "Motores e alarmes",
        media: central_de_alarme
    },
    {
        id: 18,
        name: "Sensor de presença em infravermelho para acionamento de alarmes",
        category: "Motores e alarmes",
        media: sensor_infravermelho
    }
]