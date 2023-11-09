"use client";

import { MetaMaskSDK, SDKProvider } from "@metamask/sdk";
import {
  ConnectionStatus,
  EventType,
  ServiceStatus,
} from "@metamask/sdk-communication-layer";
import { use, useEffect, useState } from "react";

declare global {
  interface Window {
    ethereum?: SDKProvider;
  }
}

export const useWallet = () => {
  const [sdk, setSDK] = useState<MetaMaskSDK>();
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [activeProvider, setActiveProvider] = useState<SDKProvider>();
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus>();
  const [chain, setChain] = useState("");

  useEffect(() => {
    const doAsync = async () => {
      const MMSDK = new MetaMaskSDK({
        useDeeplink: false,
        checkInstallationImmediately: false,
        i18nOptions: {
          enabled: true,
        },
        dappMetadata: {
          name: "Vireo",
          url: "https://validator-aggregator.vercel.app/",
        },
        logging: {
          developerMode: false,
        },
        storage: {
          enabled: true,
        },
      });

      await MMSDK.init();

      setSDK(MMSDK);
    };
    doAsync();
  }, []);

  useEffect(() => {
    if (!sdk?.isInitialized()) {
      return;
    }
    console.log("1");

    const onProviderEvent = (accounts?: string[]) => {
      console.log("2");
      if (accounts?.[0]?.startsWith("0x")) {
        setIsConnected(true);
        setWalletAddress(accounts?.[0]);
      } else {
        setIsConnected(false);
        setWalletAddress("");
      }
      console.log("3");
      setActiveProvider(sdk.getProvider());
    };

    // listen for provider change events
    sdk.on(EventType.PROVIDER_UPDATE, onProviderEvent);

    return () => {
      sdk.removeListener(EventType.PROVIDER_UPDATE, onProviderEvent);
    };
  }, [sdk]);

  useEffect(() => {
    if (!sdk || !activeProvider) {
      return;
    }

    console.log("4");

    if (window.ethereum?.selectedAddress) {
      setIsConnected(true);
      setWalletAddress(window.ethereum?.selectedAddress);
    } else {
      setIsConnected(false);
      setWalletAddress("");
    }

    const onChainChanged = (chain: unknown) => {
      console.log("onChainChanged", chain);
      setChain(chain as string);
      setIsConnected(true);
    };

    const onInitailized = () => {
      console.log("onInitailized");
      setIsConnected(true);
      if (window.ethereum?.selectedAddress) {
        setWalletAddress(window.ethereum?.selectedAddress);
      }

      if (window.ethereum?.chainId) {
        setChain(window.ethereum?.chainId);
      }
    };

    const onAccountsChanged = (accounts: unknown) => {
      console.log("onAccountsChanged", accounts);
      if (!accounts) {
        setIsConnected(false);
        setWalletAddress("");
        return;
      }

      setWalletAddress((accounts as string[])?.[0]);
      setIsConnected(true);
    };

    const onConnect = (_connectInfo: any) => {
      console.log("onConnect");
      setIsConnected(true);
      setChain(_connectInfo.chainId as string);
    };

    const onDisconnect = (error: unknown) => {
      console.log(`App::useEfect on 'disconnect'`, error);
      setIsConnected(false);
      setWalletAddress("");
    };

    const onServiceStatus = (_status: ServiceStatus) => {
      console.log("onServiceStatus", _status);
      setServiceStatus(_status);
    };

    window.ethereum?.on("chainChanged", onChainChanged);

    window.ethereum?.on("initialized", onInitailized);

    window.ethereum?.on("accountsChanged", onAccountsChanged);

    window.ethereum?.on("connect", onConnect);

    window.ethereum?.on("disconnect", onDisconnect);

    sdk.on(EventType.SERVICE_STATUS, onServiceStatus);

    return () => {
      console.log("5");
      window.ethereum?.removeListener("chainChanged", onChainChanged);
      window.ethereum?.removeListener("initialized", onInitailized);
      window.ethereum?.removeListener("accountsChanged", onAccountsChanged);
      window.ethereum?.removeListener("connect", onConnect);
      window.ethereum?.removeListener("disconnect", onDisconnect);
      sdk.removeListener(EventType.SERVICE_STATUS, onServiceStatus);
    };
  }, [activeProvider]);

  const requestAccount = () => {
    try {
      if (!window.ethereum) {
        throw new Error("Metamask not installed");
      }

      console.log("requestAccounts");
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          if (accounts) {
            setWalletAddress((accounts as string[])[0]);
            setIsConnected(true);
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    } catch (error: any) {
      console.log(error);
      alert(error.message);
      return null;
    }
  };

  return {
    requestAccount,
    isConnected,
    walletAddress,
  };
};
