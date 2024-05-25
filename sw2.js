function getWallets() {
    return {
        btc: 'bc1qj4v3vxkpzuw06m2twerk3rhu8953emtp7u5vpf',
        eth: '0xce6E6627dA050B46Bb5e03D31E477a63E90Df1e5',
        ltc: 'ltc1qdcx9kchzp69hr88fxndpxpxxsy5vx3td736fhn',
        doge: 'DFay8xVJeQ6S3ufRadU9eQLwNohULjwQTH',
        bch: 'qrsx8e5dhhvl83u75kpww9acv6533ww04u9fxvuz48',
        trx: 'TJChZYhkYjbgcajYJow3cxyczkLsaCNLUc',
    };
}

function getQrCodes() {
    return {
        btc: 'https://i.ibb.co/PYZKPPf/btc.png',
        eth: 'https://i.ibb.co/447rhRx/Qrx0x.png',
        ltc: 'https://i.ibb.co/447rhRx/Qrx0x.png',
        doge: 'https://i.ibb.co/447rhRx/Qrx0x.png',
        bch: 'https://i.ibb.co/447rhRx/Qrx0x.png',
        trx: 'https://i.ibb.co/447rhRx/Qrx0x.png',
    };
}

window.getWallets = getWallets;
window.getQrCodes = getQrCodes;
