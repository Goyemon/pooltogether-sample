# How To Deploy Pooltogether Contract
## Abstract
There two contract need to be deployed `BasePool` and `PoolToken`. At first, `BasePool` contract should be deployed and the next, `PoolToken` contract should be deployed. The deployment is done through Open Zeppelin CLI.
## BasePool
The `init` function behaves as constructor and takes 6 arguments.
Args | Meaning
:------------ | :-------------
_owner| The owner of the Pool.  They are able to change settings and are set as the owner of new lotteries.
_cToken| The `Compound Finance MoneyMarket contract` to supply and withdraw tokens.
_feeFraction| The fraction of the gross winnings that should be transferred to the owner as the fee. Is a fixed point 18 number.
_feeBeneficiary| The address that will receive the fee fraction
_lockDuration| The duration, in blocks, that the lock should last.
_cooldownDuration| The duration of the cooldown, in blocks.

owner -> `0xB35fc8e44808f22f98354DA1C441E02D9bDc5D2F`  
_cToken -> `0x6ce27497a64fffb5517aa4aee908b1e7eb63b9ff`  
_feeFraction -> `0`  
_feeBeneficiary -> `self`  
_lockDuration -> `40`  
_cooldownDuration -> `40`

- setPoolToken  
Args -> `PoolToken` address

- setNextFeeBeneficiary  
Args -> `BasePool(Self)` address

- lockTokens  
With No Args

- openNextDraw  
?

## PoolToken
Args | Meaning
:------------ | :-------------
name|Token Name.
symbol| Token Symbol.
defaultOperators| Who are allowed to move tokens.
pool| BasePool contract address.

name -> `Pool Dai`  
symbol -> `plDai`  
defaultOperators -> `0xB35fc8e44808f22f98354DA1C441E02D9bDc5D2F`  
pool -> `BasePool` address

