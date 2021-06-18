import './styles.css'
interface List{
  data:{
    title:string,
    url: string,
  }
}
export function ListPhotos({ data }:List){
  return (
    <div className="ListContainer">
      <img src={data.url} width="150" height="150" />
      <h3>{data.title}</h3>
    </div>
  );
};