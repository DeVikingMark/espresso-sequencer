use async_compatibility_layer::logging::{setup_backtrace, setup_logging};
use clap::Parser;
use ethers::prelude::*;
use futures::join;
use surf_disco::Url;

mod json_rpc;
mod sequencer;

#[derive(Parser)]
pub struct Options {
    /// URL of a HotShot sequencer node.
    #[clap(long, env = "ESPRESSO_SEQUENCER_URL")]
    sequencer_url: Url,

    /// URL of layer 1 Ethereum JSON-RPC provider.
    #[clap(long, env = "ESPRESSO_ZKEVM_L1_PROVIDER")]
    l1_provider: Url,

    /// Chain ID for layer 1 Ethereum
    ///
    /// This can be specified explicitly as a sanity check. No transactions will be executed if the
    /// RPC specified by `l1_provider` has a different chain ID. If not specified, the chain ID from
    /// the RPC will be used.
    #[clap(long, env = "ESPRESSO_ZKEVM_L1_CHAIN_ID")]
    l1_chain_id: Option<u64>,

    /// Address of Hermez rollup contract on layer 1.
    #[clap(long, env = "ESPRESSO_ZKEVM_ROLLUP_ADDRESS")]
    rollup_address: Address,

    /// Address of Matic token contract on layer 1.
    #[clap(long, env = "ESPRESSO_ZKEVM_MATIC_ADDRESS")]
    matic_address: Address,

    /// Mnemonic phrase for the sequencer wallet.
    ///
    /// This is the wallet that will be used to send blocks sequenced by HotShot to the rollup
    /// contract. It must be funded with ETH and MATIC on layer 1.
    #[clap(long, env = "ESPRESSO_ZKEVM_SEQUENCER_MNEMONIC")]
    sequencer_mnemonic: String,

    /// Port on which to serve the JSON-RPC API.
    #[clap(
        short,
        long,
        env = "ESPRESSO_ZKEVM_ADAPTOR_PORT",
        default_value = "8545"
    )]
    port: u16,
}

#[async_std::main]
async fn main() {
    setup_logging();
    setup_backtrace();

    let opt = Options::parse();
    join!(json_rpc::serve(&opt), sequencer::run(&opt));
}
