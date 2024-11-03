To launch the Ticket Sale Project, the repository can be cloned to a local machine using the command
 git clone https://github.com/ShareitaGautam/TicketSaleProject.git, 
 followed by navigating to the project directory with cd
  TicketSaleProject. 
Ensuring that Node.js is installed is essential,
 and the necessary dependencies can be installed by 
 executing npm install. Before deploying the contracts, 
 they should be compiled using npx hardhat compile. 
 To deploy the contracts, the deployment scripts 
 located in the scripts folder can be utilized; 
 for example, running npx hardhat run scripts/deploy_with_ethers.ts --network <network_name>,
  with <network_name> replaced by the preferred Ethereum network (e.g., localhost or rinkeby).
   Finally, verifying the functionality of the contracts can be accomplished by running the test
    suite with npx hardhat test, while monitoring the console for any output or errors during these steps.