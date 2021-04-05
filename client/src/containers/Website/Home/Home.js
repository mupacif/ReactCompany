/* Packages */
import React,{useState, useEffect}from 'react';
import AddCrypto from './addCrypto'
/* Components */
import CryptoCard from '../../../components/CryptoCard/CryptoCard';
import { useParse } from '../../../components/context/parse-context';
import Parse from 'parse';





const Home  = (props) => {

  const [ cryptos, setCryptos] = useState([]);
  const table = "Recomendations"
  const parseService = useParse();
  const user = Parse.User.current()
  let recomdsParse = parseService.getAll(table, user );





  useEffect(()=>{
      const sub = recomdsParse.subscribe((crypto) => {
        setCryptos(crypto)
      });
      return()=>{
        sub.unsubscribe();
        debugger
      }
    },[]
  )

 const addToList = (el) =>{
   const list = [...cryptos];
   list.push(el);
   setCryptos(list)
 }

 const deleteCrypto = (id) => {
    const list = [...cryptos];
    var index = list.findIndex(e=>e.id=id)
    if (index !== -1) {
      list.splice(index, 1);
      parseService.delete(table, id);
      setCryptos(list)
    }
 }

const recoms = cryptos.map((e) =><CryptoCard key={e.id} crypto= {e} cb={()=>deleteCrypto(e.id)} />)
 return(
      <div>
        <h1 className="uk-text-center">Home</h1>
        {user && <AddCrypto cb = {addToList} />}
        { recoms}
        <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match products" data-uk-grid>

        </div>
      </div>
    );

}

export default Home;
