# Pooltogether Sample
Trying to deploy pooltogether contract to Ropsten.
## Build
```
$ truffle compile
```
## Deploy
```
$ oz create
```
## Contracts
- PoolToken -> This may be main contract.
- BasePool -> This has pooled ether and a dependency relationships with Compound.
## Constructor
### [PoolToken](https://github.com/Goyemon/pooltogether-sample/blob/master/contracts/PoolToken.sol)
Args | Meaning
:------------ | :-------------
name|Token Name.
symbol| Token Symbol.
defaultOperators| Who are allowed to move tokens.
pool| BasePool contract address.
### [BasePool](https://github.com/Goyemon/pooltogether-sample/blob/master/contracts/BasePool.sol#L244)
Args | Meaning
:------------ | :-------------
_owner| The owner of the Pool.  They are able to change settings and are set as the owner of new lotteries.
_cToken| The `Compound Finance MoneyMarket contract` to supply and withdraw tokens.
_feeFraction| The fraction of the gross winnings that should be transferred to the owner as the fee.  Is a fixed point 18 number.
_feeBeneficiary| The address that will receive the fee fraction
_lockDuration| The duration, in blocks, that the lock should last.
_cooldownDuration| The duration of the cooldown, in blocks.
