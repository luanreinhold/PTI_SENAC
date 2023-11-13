import { HQ } from './classes/Hq';
import { menu } from './utils/menu';


function Main() {
    try {
        let produtos : HQ[] = []
        menu(produtos);
    } catch (error) {
        console.log(`ERRO na execução! ${error}`)
    }

}

Main();
