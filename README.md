# Pooltogether Sample
Trying to deploy pooltogether contract to Ropsten.
## Build
```
$ truffle compile
```
## Basic
- BasePool
```
Pool Dai Proxy -> https://etherscan.io/address/0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958
Pool Dai Implementation -> https://etherscan.io/address/0xa125841831b4645f22c1c4ccb6e1df0842e60040#code
```
- PoolToken
```
Pool Dai Token Proxy -> https://etherscan.io/address/0x49d716dfe60b37379010a75329ae09428f17118d#readProxyContract
Pool Dai Token Implementation -> https://etherscan.io/address/0x23ca306c621a9d6f3cade4fa05a4b702dfeafdf2#code
```

## BasePool Deploy
- contract creation
https://etherscan.io/tx/0xb8b5a57fa3bab5d8832022ede26cc9c5111380fbbc18412c7e1164ffb912e69b
- setPoolToken
https://etherscan.io/tx/0x00eab71bf23a8ec3bffc7486879be4f6bd5f5866454bc8be195e89ed4c8a992c
- addAdmin
https://etherscan.io/tx/0x24a50e22de4dbdef557ef770f85b45f82ac783b7c96c96838d609d551a1c1abf
- setNextFeeBeneficiary(0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958)
https://etherscan.io/tx/0x3fc1f20cb281c354ed6ef7bcac9f35a208fcc9449d6511ba243100687434fcea
- addAdmin
https://etherscan.io/tx/0x70aa623a8409e8c91e4b32a334cf25975a77f96a12409e2f13c70da875b565aa
- lockTokens
https://etherscan.io/tx/0x38c07824588243ecfaba9c80fa4d38829b69f03e6f592957e4cfe7800f141dcc
- openNextDraw
https://etherscan.io/tx/0x2aefe7a776981491a02d8a2aec274f468b01da4ed89a6ff67c1948d93bc0d807
- addAdmin
https://etherscan.io/tx/0xade3a498a6487c0422fe627b5aa8e2c0a6d7113aad19e4ab46571e832342011e

## PoolToken Deploy
- contract creation
https://etherscan.io/tx/0xa3e327954d63d8c845c774cf1e69f45fca5df1e4e1ee694ebf0339f235a3d683
- setRecipientWhitelistEnabled
https://etherscan.io/tx/0x5f5bdd8ebb900005b18c959f2df5b436a817e4e5a59d2b46aded236cd65ba3af
- setRecipientWhitelistEnabled
https://etherscan.io/tx/0xd038041e436550c1fecc57216de2d64e1e4925d1f9ca25ea1d4c5ff247fc3ca9

## Constructor
### [PoolToken](https://github.com/Goyemon/pooltogether-sample/blob/master/contracts/PoolToken.sol)
PoolToken has information about token `Name` and `Symbol`, `operators` and `pool contract address`.
Args | Meaning
:------------ | :-------------
name|Token Name.
symbol| Token Symbol.
defaultOperators| Who are allowed to move tokens.
pool| BasePool contract address.
### [BasePool](https://github.com/Goyemon/pooltogether-sample/blob/master/contracts/BasePool.sol#L244)
BasePool has information about `Compound contract address` and `gross`.
Args | Meaning
:------------ | :-------------
_owner| The owner of the Pool.  They are able to change settings and are set as the owner of new lotteries.
_cToken| The `Compound Finance MoneyMarket contract` to supply and withdraw tokens.
_feeFraction| The fraction of the gross winnings that should be transferred to the owner as the fee.  Is a fixed point 18 number.
_feeBeneficiary| The address that will receive the fee fraction
_lockDuration| The duration, in blocks, that the lock should last.
_cooldownDuration| The duration of the cooldown, in blocks.

## Value
- owner = same with addAdmin argument
- cToken = 0x5d3a536e4d6dbd6114cc1ead35777bab948e3643
- lockDuration = 40
