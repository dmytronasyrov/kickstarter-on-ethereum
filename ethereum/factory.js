import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC5a239615d4e79C08723DADCAD2ebe7E6ec5E3a5'
)

export default instance
