import './styles.css'
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'

export function Header(){
  
  const currentDate = format(new Date(), "EEEEEE, d MMMM",{
    locale: ptBR,
  })

  return (
    <header className="headerContainer" >
      <img src="/logo.png" alt="Aleatório" width="100" height="80" />
      <p>Vários conteúdos!</p>
      <span>{currentDate}</span>
    </header>
  );
};