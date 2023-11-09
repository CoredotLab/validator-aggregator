import { useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";

export type CreateStakeIntentRequest = {
  stakes: {
    withdrawal_credentials: string;
    amount: string;
  }[];
};

export type CreateStakeIntentResponse = {
  stake_intent_id: string;
  ethereum: {
    stakes: {
      stake_id: string;
      amount: string;
      validator_public_key: string;
      withdrawal_credentials: string;
    }[];
    contract_address: string;
    unsigned_transaction: string;
  };
};

export function useBlockDaemon() {
  const [network, setNetwork] = useState<"mainnet" | "goerli">("goerli");
  const ethereumSenderAddress = "0xB4fa1208E1f7dadA8a952B1EdeAdA26122024092";
  const bossApiKey = process.env.NEXT_PUBLIC_BLOCKDAEMON_BOSS_API_KEY;
  const ubiquityApiKey = process.env.NEXT_PUBLIC_BLOCKDAEMON_UBIQUITY_KEY;
  const [web3, setWeb3] = useState<Web3>();

  const createStakeIntent = async (
    request: CreateStakeIntentRequest
  ): Promise<CreateStakeIntentResponse> => {
    const url = `https://svc.blockdaemon.com/boss/v1/ethereum/${network}/stake_intent`;

    const response = await axios.post<CreateStakeIntentResponse>(url, request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": bossApiKey,
      },
    });

    return response.data;
  };

  useEffect(() => {
    const doAsync = async () => {
      const web3 = new Web3(
        `https://svc.blockdaemon.com/ethereum/${network}/native?apiKey=${ubiquityApiKey}`
      );
      setWeb3(web3);
    };
    doAsync();
  }, []);
}
