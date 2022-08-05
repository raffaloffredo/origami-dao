import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9a681e21144F21AB91361876fF73f8b295e211F4");

(async () => {
  try {
    // createBatch serve para criar o NTF
    // como é um contrato ERC1155 todos os membros terão o mesmo NFT
    await editionDrop.createBatch([
      {
        name: "Origami Hydrangea Lilás",
        description: "Esse NFT vai te dar acesso ao OrigamiDAO!",
        image: readFileSync("scripts/assets/origaminft.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()