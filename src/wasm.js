export async function handle (state, action) {
    const input = action.input;
    wasmURL = input.wasmURL;
    wasmFunc = input.wasmFunc;
    wasmArgs = input.wasmArgs;
    const caller = action.caller;
  
    if (input.function == "wasm") {
      let axios = SmartWeave.unsafeClient.api
      let wasm;
      let config = {
          method: 'get',
          url: wasmURL,
          responseType: 'arraybuffer'
        };
    await axios.get(config.url, config)
        .then(async function (response) {
            wasm = await new WebAssembly.Module(response.data);
            let instance = await new WebAssembly.Instance(wasm);
            state.wasm.push(await instance.exports[wasmFunc](...wasmArgs))
        })
        return { state };
    }
  
    throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
  }
  