import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const goToApp = () => {
    router.push("/app");
  };

  return {
    goToApp,
  };
};
