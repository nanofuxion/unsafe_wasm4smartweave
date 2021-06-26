# unsafe_wasm4smartweave
## A highly experimental method of running wasm in smartweave contracts without modifying the handler function, not recommended for production.

* ## *this example is not intended for production use and is only intended for educational use.*

## Research statements:

1. In the current contract example the wasm file must be hosted on a server, the contract is able to make a web request to, preferable a server with a long-term uptime expectancy such as hosting the wasm on Arweave or IPFS.

2. Avoid using a wasm file/function that returns an object with circular object references as the contract state is json and cannot accept object with circular object references.

3. A static wasm instance in contract can be achieved by replacing the axios web request used in this example contract with a string to binary solution such as base64.

The example contract is currently [Live] on the smartweave and should in theory accept any wasm file/function that does not violate statement 2. above.

## Burning away AR in the name of science:
* how to execute the [Live] contract:
1. The example only accepts one function in input ```"wasm"```.
2. A wasm files url must be passed to ```"wasmURL"```.
3. A string with the name of the function in the wasm file to be called should be passed to ```"wasmFunc"```.
4. An array with with the arguments for the wasm function must be passed if the function accepts arguments.

An example input can be seen below:

```json
{
    "function":"wasm",
    "wasmURL":"https://github.com/torch2424/wasm-by-example/raw/master/examples/hello-world/demo/assemblyscript/hello-world.wasm",
    "wasmFunc":"add",
    "wasmArgs":[8,8]
}
```

A SW execution example below:

```sh
smartweave write txqZ6Rfk_1d5MJm-0-4Nrm7didwYELgas9R0Pu0__EA --key-file '/where/you/store/your-key.json' --input '{"function":"wasm", "wasmURL":"https://github.com/torch2424/wasm-by-example/raw/master/examples/hello-world/demo/assemblyscript/hello-world.wasm", "wasmFunc":"add","wasmArgs":[5,5]}'  
```


If you found my research on the topic insightful or useful consider buying me a coffee ☕️. : 
* AR: a5_du7BfZ3aCqAjVYWROr1uFogvX1O5oN-rMTV3GB1I
* BNB: bnb1kp94eh86tv05fganfezr0u9tqycq7skgu6wa26

[Live]: https://viewblock.io/arweave/address/txqZ6Rfk_1d5MJm-0-4Nrm7didwYELgas9R0Pu0__EA

## License

This project is licensed under the terms of the MIT license.



