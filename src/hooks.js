import { useSelector } from "react-redux";
import { transformWalletData } from "./utils";
import { useDispatch } from "react-redux";
import { fetchUserWalletsAction } from "./stores/actions";
import { useEffect, useState } from "react";

export const useWallets = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserWalletsAction());
    }, []);

    const walletFetched = useSelector(state => state.wallets.walletsAndBalancesfetched);
    useEffect(() => {
        setWalletsFetched(walletFetched)
        console.log({walletFetched});
    }, [walletFetched]);

    const [fetched, setWalletsFetched] = useState(walletFetched);

    const walletsState = useSelector(state => state.wallets);

    const defaultWallet = transformWalletData({
        ...walletsState.wallets[walletsState.defaultWalletId],
        balance: walletsState.balances[walletsState.defaultWalletId]
    });
    const walletData = walletsState.wallets.map((wallet, index) => ({ ...wallet, balance: walletsState.balances[wallet.id] })).map(transformWalletData);
    return { walletData, defaultWallet, fetched };
}