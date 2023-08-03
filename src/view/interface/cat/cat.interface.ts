import { File } from "buffer";

enum TipoServico {
    CAT_AtividadeConcluida = 'CAT Com Registro de Atestado - Atividade Concluída',
    CAT_AtividadeAndamento = 'CAT Com Registro de Atestado - Atividade em Andamento',
    CAT_SemRegistro = 'CAT Sem Registro de Atestado',
    CAT_Complementar = 'CAT com Registro de Atestado - Complementar',
    SubstituicaoCAT_NovoAtestado = 'Substituição de CAT com Novo Atestado',
    SegundaVia = 'Segunda Via',
    CAT_Exterior = 'CAT de atividade desenvolvida no exterior',
  }


export interface SubmitArtDto {
  emailNotificacao: string;
  tipoServico: TipoServico;
  artNumero: string;
  receberPorEmailCat: boolean;
  emailEnvioCat: string;
  periodoCertificadoDe: Date;
  periodoCertificadoAte: Date;
  existeContratoSubempreitada: boolean;
  informacoesSubempreitada: string;
  declaracaoAtestado: string;
  execucaoObra: boolean;
  prestacaoServicos: boolean;
  termoResponsabilidade: boolean;
  entregaDocumento: string;
  atestadoEmitido: File; 
  comprovanteVinculo?: File; 
  outrosDocumentos?: File;
  exclusivoExterior?: File; 
  laudoTecnico?: File; 
}