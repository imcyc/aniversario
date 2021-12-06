import Layout from "../components/Layout";
import { useRouter } from 'next/router';

export default function Tipo(){
    const router = useRouter();
    const { tipo } = router.query;
    return(
        <Layout>
            <div className="gerencia">
                <h2 style={{'textTransform':'uppercase'}}>{tipo}</h2>
            </div>
        </Layout>
    )
}