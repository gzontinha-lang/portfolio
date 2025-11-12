/**
 * Projects Repository Implementation
 * Concrete implementation using local data
 * Can be easily replaced with API calls in the future
 */

import { ProjectsRepository } from '../interfaces/ProjectsRepository.interface';
import { Project } from '../../types';

export class LocalProjectsRepository implements ProjectsRepository {
  getAll(): Project[] {
    return [
      {
        id: '1',
        title: 'Dora Modas',
        description: 'Este projeto começou como um sistema interno para o controle de produtos de uma loja física, mas evoluiu para uma vitrine online onde os clientes podem visualizar os produtos disponíveis e entrar em contato diretamente com a loja para verificar disponibilidade ou fazer pedidos personalizados. O site foi desenvolvido com Node.js, React, TypeScript e PostgreSQL, e tem como objetivo facilitar a comunicação entre loja e clientes, mantendo a gestão simples e acessível. Foi um projeto essencial para consolidar meus conhecimentos em integração entre front-end e back-end, criação de APIs e organização de banco de dados.',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        link: 'https://doramodas.com/',
        image: 'https://64.media.tumblr.com/80b60a467192fc001471f31bec3af34a/b3aa9bc65e48b448-f8/s2048x3072/93fdc02f43279d210e35bfb25cbbd926573b6a8f.pnj',
      },
    ];
  }
}

