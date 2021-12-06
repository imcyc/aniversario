import Layout from "../components/Layout";
import { useRouter } from 'next/router';

export default function Tipo(){
    const router = useRouter();
    const { tipo } = router.query;
    let titulo = tipo;
    if(tipo){
        titulo = tipo.replace("-", " ");
    }

    return(
        <Layout>
            <div className="gerencia">
                <h2 style={{'textTransform':'uppercase'}}>{titulo}</h2>
            </div>
        </Layout>
    )
}