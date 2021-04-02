import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x45D75bd5976FaEd1328c0b7E062df2d74FBBC3b5'
);

export default instance;
