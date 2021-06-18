import './styles.css';
interface Users{
  data:{
  name: string;
  username: string;
  email: string;
  address:{
    street: string;
    city:string;
    zipcode: string;
   }
  }
}
export function ListUsers({data}:Users){
  return (
    <div className="ListUsersContainer">
      <h2>Nome: {data.name}</h2>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Cidade: {data.address.city}</p>
      <span>Rua: {data.address.street}</span>
      <span>CEP: {data.address.zipcode} </span>
    </div>
  );
};