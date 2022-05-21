export class ThreeDPrint {
  id: number;
  name: string | null;
  StlFileUrl: string | null;
  customGcodeUrl: string | null;
  printerName: string | null;
  filamentType: string | null;
  filamentBrand: string | null;
  printTemp: number | null;
  printSpeed: number | null;
  adhesionLayer: string | null;
  printQuality: number | null;
  supports: boolean | null;
  printImageUrl: string | null;
  creates: number | null;
  lastDateCreated: string | null;

  constructor(
    id: number=0,
    name: string | null ='',
    StlFileUrl: string | null ='',
    customGcodeUrl: string | null ='',
    printerName: string | null ='',
    filamentType: string | null ='',
    filamentBrand: string | null ='',
    printTemp: number | null =0,
    printSpeed: number | null =0,
    adhesionLayer: string | null ='',
    printQuality: number | null =0,
    supports: boolean | null =false,
    printImageUrl: string | null ='',
    creates: number =0,
    lastDateCreated: string | null =''
  ) {
    this.id = id;
    this.name = name;
    this.StlFileUrl = StlFileUrl;
    this.customGcodeUrl = customGcodeUrl;
    this.printerName = printerName;
    this.filamentType = filamentType;
    this.filamentBrand = filamentBrand;
    this.printTemp = printTemp;
    this.printSpeed = printSpeed;
    this.adhesionLayer = adhesionLayer;
    this.printQuality = printQuality;
    this.supports = supports;
    this.printImageUrl = printImageUrl;
    this.creates = creates;
    this.lastDateCreated = lastDateCreated;
  }
}
