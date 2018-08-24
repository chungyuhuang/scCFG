<template>
    <div class="align-middle">
        <h2>Smart Contract Analyze Result</h2>
        <el-table
            :data="tableData2"
            style="width: 90%"
            :row-class-name="tableRowClassName">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <p>Balance: {{ props.row.balance }} Ether</p>
                    <p>Transactions: {{ props.row.tx }} txns</p>
                    <p>Blocks in CFG: {{ props.row.node }}</p>
                    <p v-if="props.row.gas">Loop gas consumption: {{ props.row.gas }}</p>
                    <p>Soruce Code: <a :href="props.row.sc" target="_blank">{{props.row.sc}}</a></p>
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="Contract Name"
                width="210">
            </el-table-column>
            <el-table-column
                prop="addr"
                label="Address"
                width="390">
            </el-table-column>
            <el-table-column
                prop="ins"
                label="Instructions"
                width="210">
            </el-table-column>
            <el-table-column
                label="CFG"
                width="180">
                <template slot-scope="scope">
                    <el-button
                    v-if="scope.row.show"
                    size="mini"
                    type="primary"
                    @click="handleShow(scope.row)">Show</el-button>                    
                    <el-dialog
                    title="Control Flow Graph"
                    :visible.sync="dialogVisible"
                    width="80%"
                    >
                        <span><img :src="img" width="500"></span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">Cancel</el-button>
                        </span>
                    </el-dialog>
                    <el-button
                    v-if="scope.row.show"
                    size="mini"
                    type="success"><a :href="handleDownload(scope.row)" download="">Download</a></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (row.cycle === true) {
          return 'warning-row';
        }
        return '';
      },
      handleShow(row) {
        this.dialogVisible = true;
        this.img = row.cfg;
        // console.log(row.cfg);
        // this.showImg(this.img);
      },
      handleDownload(row) {
        // console.log(row.cfg);
        this.downloadImg = row.cfg;
        return row.cfg;
      },
      showImg(img) {
        console.log('showshowhow');
        // console.log();
        console.log(this.$router.push({path: '/show/show'}))
        // this.$router.push({path: '/show/show', query: { imgName: img }})
        console.log('sklfjasd;lkfjals;djfal;sj');
        },
    },
    data() {
      return {
        img: '',
        downloadImg: '',
        dialogVisible: false,
        tableData2:  [{
          name: 'MoonCatRescue',
          addr: '0x60cd862c9C687A9dE49aecdC3A99b74A4fc54aB6',
          ins: 8650,
          cycle: true,
          balance: 6.08960513010001,
          tx: 6647,
          sc: 'https://etherscan.io/address/0x60cd862c9c687a9de49aecdc3a99b74a4fc54ab6#code',
          cfg: '../../static/img/cfg_loop_part_with_constraints_moon_cat.svg',
          node: 458,
          gas: 3472,
          show: true
        }, {
          name: 'CryptoPunksMarket',
          addr: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
          ins: 6441,
          cycle: false,
          balance: 212.510667068223383179,
          tx: 18296,
          sc: 'https://etherscan.io/address/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB#code',
          cfg: '',
          node: 321,
          gas: '',
          show: false
        }, {
          name: 'SafeMathLibExt',
          addr: '0xDa8002DccdF3d68B5cb310A705aC76aFfd887DF6',
          ins: 387,
          cycle: false,
          balance: 0,
          tx: 1,
          sc: 'https://etherscan.io/address/0xDa8002DccdF3d68B5cb310A705aC76aFfd887DF6#code',
          cfg: '',
          node: 32,
          gas: '',
          show: false
        }, {
          name: 'PromissoryToken',
          addr: '0x0348B55AbD6E1A99C6EBC972A6A4582Ec0bcEb5c',
          ins: 7642,
          cycle: true,
          balance: 1.131884071130000015,
          tx: 359,
          sc: 'https://etherscan.io/address/0x0348b55abd6e1a99c6ebc972a6a4582ec0bceb5c#code',
          cfg: '../../static/img/cfg_loop_part_with_constraints_prom.svg',
          node: 438,
          gas: 44281,
          show: true
        }, {
          name: 'DigiPulse',
          addr: '0x9AcA6aBFe63A5ae0Dc6258cefB65207eC990Aa4D',
          ins: 1856,
          cycle: true,
          balance: 100.633469345624563517,
          tx: 1559,
          sc: 'https://etherscan.io/address/0x9AcA6aBFe63A5ae0Dc6258cefB65207eC990Aa4D#code',
          cfg: '../../static/img/cfg_loop4.svg',
          node: 140,
          gas: 1799,
          show: true
        }, {
          name: 'PreTgeExperty',
          addr: '0x942fFEf843D37805c59F30FaBb99B46aAd135288',
          ins: 2537,
          cycle: true,
          balance: 406.607596164599999,
          tx: 176,
          sc: 'https://etherscan.io/address/0x942ffef843d37805c59f30fabb99b46aad135288#code',
          cfg: '../../static/img/cfg_loop5.svg',
          node: 161,
          gas: 1563,
          show: true
        }, {
          name: 'ProtectTheCastle',
          addr: '0xa9fA83D31fF1cFD14B7f9D17f02e48dCfD9Cb0Cb',
          ins: 2496,
          cycle: true,
          balance: 0.0141,
          tx: 17,
          sc: 'https://etherscan.io/address/0xa9fa83d31ff1cfd14b7f9d17f02e48dcfd9cb0cb#code',
          cfg: '../../static/img/cfg_loop_part_with_constraints_castle.svg',
          node: 166,
          gas: '',
          show: true
        }, {
          name: 'NoFeePonzi',
          addr: '0xf7070Fc72E2B92c6309785a39338D7C919a3cF4a',
          ins: 842,
          cycle: true,
          balance: 4.9886,
          tx: 31,
          sc: 'https://etherscan.io/address/0xf7070fc72e2b92c6309785a39338d7c919a3cf4a#code',
          cfg: '../../static/img/cfg_loop_part_with_constraints_ponzi.svg',
          node: 79,
          gas: '',
          show: true
        }, {
          name: 'NamiMarket',
          addr: '0x3E6eb90d362535Fb073e5723709a9Ea449CdD6CD',
          ins: 5039,
          cycle: true,
          balance: 2.23225700000000001,
          tx: 54,
          sc: 'https://etherscan.io/address/0x3E6eb90d362535Fb073e5723709a9Ea449CdD6CD#code',
          cfg: '../../static/img/cfg_loop_part_with_constraints_nami.svg',
          node: 338,
          gas: 25091,
          show: true
        }, {
          name: 'PonzICO',
          addr: '0x1ce7986760ADe2BF0F322f5EF39Ce0DE3bd0C82B',
          ins: 1290,
          cycle: false,
          balance: 3.266396182497500183,
          tx: 86,
          sc: 'https://etherscan.io/address/0x1ce7986760ADe2BF0F322f5EF39Ce0DE3bd0C82B#code',
          cfg: '',
          node: 81,
          gas: '',
          show: false
        }, {
          name: 'MultiplyX10',
          addr: '0xe7f06E64E0D04C6cfEDF7e9079D56d0fB7200a2E',
          ins: 1234,
          cycle: true,
          balance: 3.00001,
          tx: 3,
          sc: 'https://etherscan.io/address/0xe7f06E64E0D04C6cfEDF7e9079D56d0fB7200a2E#code',
          cfg: '../../static/img/cfg_loop_part_with_constraints_multi.svg',
          node: 103,
          gas: 81448,
          show: true
        }, {
          name: 'EthergotchiOwnershipV2',
          addr: '0x449f5c827cF7726cc5F181090Aa147Ca5Fb88A40',
          ins: 828,
          cycle: false,
          balance: 0,
          tx: 380,
          sc: 'https://etherscan.io/address/0x449f5c827cF7726cc5F181090Aa147Ca5Fb88A40#code',
          cfg: '',
          node: 56,
          gas: '',
          show: false
        }, {
          name: 'Ownable',
          addr: '0x5266618848A646316B9c11e0e990dd2096cA755c',
          ins: 80,
          cycle: false,
          balance: 0,
          tx: 1,
          sc: 'https://etherscan.io/address/0x5266618848A646316B9c11e0e990dd2096cA755c#code',
          cfg: '',
          node: 8,
          gas: '',
          show: false
        }, {
          name: 'QuizTime',
          addr: '0x8A36f3e0DA7B36fd22FCf2844C21E812279372AC',
          ins: 1186,
          cycle: false,
          balance: 2.011800000727,
          tx: 29,
          sc: 'https://etherscan.io/address/0x8A36f3e0DA7B36fd22FCf2844C21E812279372AC#code',
          cfg: '',
          node: 71,
          gas: '',
          show: false
        }, {
          name: 'Dragon',
          addr: '0x639bD44f240bEB7f199a5Fec4FC6760E499b76b5',
          ins: 5584,
          cycle: true,
          balance: 0.004030007539536001,
          tx: 35,
          sc: 'https://etherscan.io/address/0x639bD44f240bEB7f199a5Fec4FC6760E499b76b5#code',
          cfg: '../../static/img/cfg_loop_part_with_constraints_dragon.svg',
          node: 421,
          gas: 28711,
          show: true
        }, {
          name: 'PublicSaleManager',
          addr: '0x948Eb63729f5b53c617fB8E4cd3fCa8d9A7Ec902',
          ins: 2505,
          cycle: true,
          balance: 22.755499999999999,
          tx: 48,
          sc: 'https://etherscan.io/address/0x948Eb63729f5b53c617fB8E4cd3fCa8d9A7Ec902#code',
          cfg: '../../static/img/cfg_loop12.svg',
          node: 181,
          gas: 21228,
          show: true
        }, {
          name: 'Insurance',
          addr: '0x1D6C596bB5022A4338B6B8651f3ACd4D836EF574',
          ins: 1820,
          cycle: false,
          balance: 0.354711104826512158,
          tx: 2,
          sc: 'https://etherscan.io/address/0x1D6C596bB5022A4338B6B8651f3ACd4D836EF574#code',
          cfg: '',
          node: 1320,
          gas: '',
          show: false
        }, {
          name: 'DiceRoll',
          addr: '0x0B4597d45Be69Bf1571B32e78Ec02730F9743d3e',
          ins: 11809,
          cycle: true,
          balance: 0.507739999999513218,
          tx: 8,
          sc: 'https://etherscan.io/address/0x0B4597d45Be69Bf1571B32e78Ec02730F9743d3e#code',
          cfg: '../../static/img/cfg_loop13.svg',
          node: 714,
          gas: 29817,
          show: true
        }, {
          name: 'XPS',
          addr: '0x17C8d8b7659141273a1c2223030C89b96713a44a',
          ins: 2313,
          cycle: false,
          balance: 0,
          tx: 465,
          sc: 'https://etherscan.io/address/0x17C8d8b7659141273a1c2223030C89b96713a44a#code',
          cfg: '',
          node: 128,
          gas: '',
          show: false
        }, {
          name: 'MultiMerkleMine',
          addr: '0x182EBF4C80B28efc45AD992ecBb9f730e31e8c7F',
          ins: 1653,
          cycle: true,
          balance: 0,
          tx: 143,
          sc: 'https://etherscan.io/address/0x182EBF4C80B28efc45AD992ecBb9f730e31e8c7F#code',
          cfg: '../../static/img/cfg_loop14.svg',
          node: 113,
          gas: 89781,
          show: true
        },{
          name: 'purchaseOrder',
          addr: 'III',
          ins: 1629,
          cycle: true,
          balance: '',
          tx: '',
          sc: 'III',
          cfg: '../../static/img/iii_purchaseOrder.svg',
          node: 129,
          gas: 435650,
          show: true
        },{
          name: 'Ownable',
          addr: 'III',
          ins: 239,
          cycle: false,
          balance: '',
          tx: '',
          sc: 'III',
          cfg: '../../static/img/iii_ownable.svg',
          node: 16,
          gas: 23001,
          show: true
        },{
          name: 'Bank',
          addr: 'III',
          ins: 354,
          cycle: false,
          balance: '',
          tx: '',
          sc: 'III',
          cfg: '../../static/img/iii_bank.svg',
          node: 26,
          gas: 13645,
          show: true
        },{
          name: 'BankAttacker',
          addr: 'III',
          ins: 578,
          cycle: false,
          balance: '',
          tx: '',
          sc: 'III',
          cfg: '../../static/img/iii_bank_attacker.svg',
          node: 46,
          gas: 20375,
          show: true
        },{
          name: 'Exchange',
          addr: 'III',
          ins: 453,
          cycle: false,
          balance: '',
          tx: '',
          sc: 'III',
          cfg: '../../static/img/iii_exchange.svg',
          node: 22,
          gas: 7455,
          show: true
        },{
          name: 'Owned',
          addr: 'III',
          ins: 378,
          cycle: false,
          balance: '',
          tx: '',
          sc: 'III',
          cfg: '../../static/img/iii_owned.svg',
          node: 30,
          gas: 19637,
          show: true
        }
        ]
      }
    }
  }
</script>

<style>
    .align-middle{
        margin-left: 105px;
    }
    .el-table .warning-row {
        background: rgb(255, 220, 220);
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .table-detail{
        background: #fffcd2
    }
</style>