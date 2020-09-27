import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class ServiceAgent extends Model {
  public id!: number;
  public companyName!: string;
  public address!: string;
  public street!: string;
  public state!: string;
  public zipCode!: string;
  public registrationNum!: string;
  public gstIn!: string;
  public tIn!: string;
  public panNum!: string;
  public noOfPeople!: number;
  public ownerDetails!: string;
  public pf!: string;
  public esi!: string;
  public companyType!: string;
  public contractExpiryDate!: string;
  public servicePartnerType!: string;
  public account!: number;
  public ifscCode!: string;
  public branchName!: string;
  public accountType!: string;
}

ServiceAgent.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    registrationNum: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gstIn: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    tin: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    panNum: {
      type: DataTypes.STRING(19),
      allowNull: false,
    },
    noOfPeople: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ownerDetails: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    pf: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    esi: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    typeOfCompany: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    contractExpiryDate: {
      type: DataTypes.DATE,
      defaultValue: Date(),
    },
    itr: {
      type: DataTypes.STRING(100),
    },
    servicePartnerType: {
      type: DataTypes.STRING(100),
    },
    account: {
      type: DataTypes.INTEGER,
    },
    ifscCode: {
      type: DataTypes.STRING(100),
    },
    accountType: {
      type: DataTypes.STRING(100),
    },
    isActive: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    createdBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    modifiedBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "ServiceAgent",
    sequelize,
  }
);
