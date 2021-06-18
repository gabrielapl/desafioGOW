import './styles.css'
interface List{
  data:{
    title: string;
    body: string;
  }
}
export function ListPosts({data}:List){
  return (
    <div className="ListPostContainer">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};