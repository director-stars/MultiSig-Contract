// SPDX-License-Identifier: LGPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./XMultiSigProxy.sol";

interface IProxyCreationCallback {
    function proxyCreated(
        XMultiSigProxy proxy,
        address _singleton,
        bytes calldata initializer,
        uint256 saltNonce
    ) external;
}