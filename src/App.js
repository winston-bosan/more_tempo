import React, { useState } from 'react';
import { Home, Map, Droplet, Radio, MapPin, Building, ExternalLink } from 'lucide-react';
// Option 1: Direct import (simplest)
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  controlsBar: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '24px'
  },
  label: {
    fontWeight: '500',
    color: '#374151'
  },
  select: {
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  button: {
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#f3f4f6'
    }
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '24px'
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }
  },
  cardHeader: {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827'
  },
  viewButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '6px 12px',
    backgroundColor: '#3b82f6',
    color: 'white',
    borderRadius: '6px',
    fontSize: '0.875rem',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#2563eb'
    }
  },
  cardContent: {
    padding: '16px'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px'
  },
  icon: {
    width: '16px',
    height: '16px',
    color: '#6b7280'
  },
  infoLabel: {
    fontWeight: '500',
    color: '#4b5563',
    minWidth: '120px'
  },
  infoValue: {
    color: '#1f2937'
  },
  zoningSection: {
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  zoningTag: {
    padding: '4px 8px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '6px',
    fontSize: '0.875rem'
  }
};

const ParcelViewer = () => {
  const [sortField, setSortField] = useState('parcel_id');
  const [sortOrder, setSortOrder] = useState('asc');

  const parcels = 
[            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 3.36,
    "land_area_acres": "0.42",
    "location": "030-002 (SW Appraisal District)",
    "owner": "GILL HARINDERBIR SINGH+KAUR",
     "parcel_id": "008700-0162",
    "present_use": "Vacant(Single-family)",
    "road_access": "PUBLIC",
    "sewer_system": "PRIVATE",
    "water_source": "WATER DISTRICT",
    "zoning": "R-8"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 3.36,
"land_area_acres": "0.42",
"location": "023-005 (WC Appraisal District)",
"parcel_id": "012303-9322",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
 "zoning": "R-8"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 9.73,
  "land_area_acres": "9.73",
  "location": "036-002 (NE Appraisal District)",
  "owner": "SPARKS CURTISS JAMES",
    "parcel_id": "012605-9029",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PRIVATE",
  "water_source": "WATER DISTRICT",
  "zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.07,
"land_area_acres": "0.07",
"location": "024-005 (WC Appraisal District)",
"owner": "PIVETTA STEVE",
"parcel_id": "017900-0665",
"present_use": "Mobile Home",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
  "zoning": "R-1"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 0.214,
    "land_area_acres": "1.07",
    "location": "071-010 (NE Appraisal District)",
    "owner": "EMMANUEL TRACY",
    "parcel_id": "020310-1485",
    "present_use": "Single Family(Res Use/Zone)",
    "road_access": "PUBLIC",
    "sewer_system": "PRIVATE",
    "water_source": "WATER DISTRICT",
    "zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0,
  "land_area_acres": "0.25",
  "location": "024-007 (WC Appraisal District)",
  "owner": "GLASPEY RITA",
  "parcel_id": "024000-0269",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
   "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "0.26",
"location": "028-008 (SW Appraisal District)",
"owner": "HAUGE CURTIS J",
"parcel_id": "027900-0010",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "MULTI-FAMILY DWELLING",
"land_area_acres": "4.99",
"parcel_id": "029369-0240",
"present_use": "Condominium(Residential)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 3.36,
"land_area_acres": "3.36",
"location": "051-002 (SW Appraisal District)",
"owner": "DHILLON IQBAL S",
"parcel_id": "032205-9101",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.176,
  "land_area_acres": "0.88",
  "location": "084-002 (SE Appraisal District)",
  "owner": "DURST TIFFANIE N",
  "parcel_id": "042206-9065",
  "present_use": "Vacant(Single-family)",
  "road_access": "PRIVATE",
  "sewer_system": "(none)",
  "zoning": "RA-5"
}
,            {
"parcel_id": "062304-9163",
"zoning": "CB"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.058,
"land_area_acres": "0.29",
"location": "095-009 (NE Appraisal District)",
"owner": "SUNCREEK RANCH LLC",
"parcel_id": "062410-0410",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.624,
  "land_area_acres": "3.12",
  "location": "058-005 (SE Appraisal District)",
   "owner": "POSTON FANNIE",
  "parcel_id": "072106-9037",
  "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
  "sewer_system": "(none)",
  "water_source": "WATER DISTRICT",
  "zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.616,
  "land_area_acres": "3.08",
  "location": "058-005 (SE Appraisal District)",
    "owner": "POSTON JOE & FANNIE",
  "parcel_id": "072106-9057",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PRIVATE",
  "water_source": "WATER DISTRICT",
  "zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.106,
  "land_area_acres": "0.53",
  "location": "100-003 (SW Appraisal District)",
   "owner": "EADS MATT &amp; KATE",
  "parcel_id": "072203-9101",
  "present_use": "Vacant(Single-family)",
    "road_access": "PRIVATE",
  "sewer_system": "(none)",
  "water_source": "WATER DISTRICT",
  "zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 1.12,
  "land_area_acres": "0.28",
  "location": "047-001 (NE Appraisal District)",
  "parcel_id": "072406-9120",
  "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
  "sewer_system": "(none)",
  "water_source": "WATER DISTRICT",
  "zoning": "R-4"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.16,
"land_area_acres": "0.29",
"location": "047-001 (NE Appraisal District)",
"parcel_id": "072406-9121",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 2.7,
  "land_area_acres": "0.45",
   "location": "023-002 (WC Appraisal District)",
  "owner": "AULICK BALWANT",
  "parcel_id": "079900-0021",
  "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
  "sewer_system": "(none)",
  "water_source": "WATER DISTRICT",
  "zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.14,
"land_area_acres": "0.14",
"location": "053-013 (SW Appraisal District)",
"owner": "NGUYEN HANG",
"parcel_id": "082104-9034",
"present_use": "Mobile Home",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
 "zoning": "R-1"
}
,            {
"parcel_id": "082505-9244",
"zoning": "EXCEPTION"
}
,            {
  "parcel_id": "083270-0230",
  "zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.015,
  "land_area_acres": "0.53",
  "location": "070-001 (NE Appraisal District)",
  "parcel_id": "092507-9024",
   "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
    "sewer_system": "PRIVATE RESTRICTED",
  "zoning": "A-35"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.13,
"land_area_acres": "0.13",
"location": "048-006 (WC Appraisal District)",
"owner": "WHITE KERRY M",
"parcel_id": "095200-5610",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "MULTI-FAMILY DWELLING",
"estimated_max_du": 15.92,
"land_area_acres": "1.99",
"parcel_id": "112106-9092",
"present_use": "Vacant(Multi-family)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-8"
}
,            {
  "best_use_vacant": "MULTI-FAMILY DWELLING",
  "estimated_max_du": 12.88,
  "land_area_acres": "1.61",
  "parcel_id": "112106-9093",
  "present_use": "Vacant(Multi-family)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
   "zoning": "R-8"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 2.168,
  "land_area_acres": "10.84",
  "location": "071-010 (NE Appraisal District)",
  "parcel_id": "112506-9074",
  "present_use": "Vacant(Single-family)",
  "road_access": "PRIVATE",
  "sewer_system": "(none)",
  "water_source": "WATER DISTRICT",
   "zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.044,
  "land_area_acres": "0.44",
  "location": "094-003 (NE Appraisal District)",
  "parcel_id": "112507-9053",
  "present_use": "Vacant(Single-family)",
  "road_access": "LEGAL/UNDEVELOPED",
  "sewer_system": "(none)",
  "zoning": "RA-10"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.03666666666666667,
"land_area_acres": "0.55",
"location": "004-002 (NW Appraisal District)",
"owner": "ECK JOHN",
"parcel_id": "115410-0640",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 2.92,
  "land_area_acres": "2.92",
  "location": "024-001 (WC Appraisal District)",
   "owner": "PRO INVESTORS LLC",
  "parcel_id": "115720-0070",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
    "zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.2,
"land_area_acres": "0.20",
"location": "025-002 (WC Appraisal District)",
"owner": "BATES CAROL ESTATE",
"parcel_id": "118000-5785",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
"best_use_vacant": "PARK/RECREATION",
"estimated_max_du": 1.778,
"land_area_acres": "8.89",
"location": "040-001 (SE Appraisal District)",
"owner": "WHITE SUZANNE",
"parcel_id": "122006-9016",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0,
  "land_area_acres": "0.15",
  "location": "096-003 (WC Appraisal District)",
  "owner": "CHENG KAM+ANGELA W C",
  "parcel_id": "122100-0274",
  "present_use": "Single Family(C/I Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "PARK/RECREATION",
  "estimated_max_du": 0.0,
  "land_area_acres": "20.07",
  "location": "066-002 (SE Appraisal District)",
  "parcel_id": "122306-9016",
  "present_use": "Forest Land(Class-RCW 84.33)",
  "road_access": "(none)",
  "sewer_system": "(none)",
  "zoning": "F"
}
,            {
  "parcel_id": "133250-0390",
  "zoning": "EXCEPTION"
  }
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 4.24,
"land_area_acres": "1.06",
"location": "057-007 (SE Appraisal District)",
"owner": "CENTURIAN PROPERTIES II LLC",
"parcel_id": "142106-9033",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PRIVATE",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.02,
"land_area_acres": "0.17",
"location": "030-002 (SW Appraisal District)",
"owner": "NEWLAND MARY E",
"parcel_id": "143240-0245",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.046,
"land_area_acres": "0.23",
"location": "071-007 (NE Appraisal District)",
"parcel_id": "144480-0130",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
"zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.062,
"land_area_acres": "0.31",
"location": "032-007 (SE Appraisal District)",
"owner": "NOZDRIN VLADIMIR",
"parcel_id": "147170-1300",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE RESTRICTED",
"water_source": "WATER DISTRICT",
"zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.062,
"land_area_acres": "0.31",
"location": "032-007 (SE Appraisal District)",
"parcel_id": "147170-1310",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
  "zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.204,
"land_area_acres": "2.04",
"location": "040-001 (SE Appraisal District)",
"parcel_id": "152006-9065",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "(none)",
"zoning": "A-10"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.087,
  "land_area_acres": "0.87",
  "location": "040-001 (SE Appraisal District)",
  "parcel_id": "152006-9070",
  "present_use": "Vacant(Single-family)",
  "road_access": "PRIVATE",
  "sewer_system": "(none)",
  "zoning": "A-10"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.80,
"land_area_acres": "0.80",
"location": "027-010 (SW Appraisal District)",
"parcel_id": "158060-0024",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.44,
"land_area_acres": "0.24",
"location": "025-002 (WC Appraisal District)",
"owner": "NGUYEN PHONG Q",
"parcel_id": "163760-0086",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.0,
"land_area_acres": "0.09",
"location": "081-011 (WC Appraisal District)",
"parcel_id": "170490-0520",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.021,
"land_area_acres": "10.21",
"location": "040-001 (SE Appraisal District)",
"owner": "SAUNDERS BRIAN & ANN",
"parcel_id": "172006-9059",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PRIVATE",
"sewer_system": "PRIVATE",
"water_source": "PRIVATE",
"zoning": "A-10"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.276,
  "land_area_acres": "2.76",
  "location": "040-001 (SE Appraisal District)",
  "owner": "SAUNDERS BRIAN & ANN",
   "parcel_id": "172006-9060",
  "present_use": "Vacant(Single-family)",
  "road_access": "PRIVATE",
  "sewer_system": "(none)",
  "water_source": "PRIVATE",
  "zoning": "A-10"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "0.41",
"location": "059-002 (SW Appraisal District)",
"owner": "SINGH HARWINDERPAL+BHATTI J",
"parcel_id": "172205-9081",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "MANUFACTURING",
"land_area_acres": "1.62",
"parcel_id": "172280-0206",
"present_use": "Industrial(Gen Purpose)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
 "zoning": "EXCEPTION"
}
,            {
  "parcel_id": "176600-2130",
  "present_use": "Condominium(Mixed Use)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.0,
"land_area_acres": "0.11",
"location": "018-002 (WC Appraisal District)",
"owner": "HILDEBRAND KATHRYN JUNE",
"parcel_id": "177310-1460",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.23,
"land_area_acres": "0.23",
"location": "003-005 (NW Appraisal District)",
"owner": "LIU HUI YU+TIAN CHWU LIU",
"parcel_id": "182970-0040",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 3.69,
"land_area_acres": "3.69",
"location": "065-001 (SE Appraisal District)",
"owner": "HELSER COLIN CLARK",
"parcel_id": "192406-9010",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PRIVATE",
"sewer_system": "PRIVATE",
"water_source": "PRIVATE",
"zoning": "R-1"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.0,
  "land_area_acres": "0.07",
  "location": "012-009 (WC Appraisal District)",
  "parcel_id": "192504-9009",
  "present_use": "Single Family(Res Use/Zone)",
   "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.09,
"land_area_acres": "0.09",
"location": "082-002 (NW Appraisal District)",
"owner": "FORSYTHE KATHLEEN J",
"parcel_id": "198220-0855",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 1.0,
    "land_area_acres": "0.50",
    "location": "022-003 (WC Appraisal District)",
    "parcel_id": "212370-0445",
    "present_use": "Vacant(Single-family)",
    "road_access": "PUBLIC",
    "sewer_system": "PUBLIC",
    "water_source": "WATER DISTRICT",
    "zoning": "R-1"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 1.18,
  "land_area_acres": "0.59",
  "location": "007-006 (NW Appraisal District)",
   "parcel_id": "212604-9247",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-24"
}
,            {
"best_use_vacant": "MULTI-FAMILY DWELLING",
"estimated_max_du": 2.8,
"land_area_acres": "0.28",
"location": "025-003 (WC Appraisal District)",
"owner": "MATTHAI E H",
"parcel_id": "214370-1730",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-12"
}
,            {
"parcel_id": "231398-0340",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.05,
"land_area_acres": "0.25",
"location": "084-002 (SE Appraisal District)",
"parcel_id": "232305-9108",
"present_use": "Vacant(Single-family)",
"road_access": "PRIVATE",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
"zoning": "UR"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.06,
"land_area_acres": "0.06",
"location": "018-003 (WC Appraisal District)",
"owner": "WILLITS JAMES A",
"parcel_id": "244460-0450",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "MULTI-FAMILY DWELLING",
  "estimated_max_du": 268.8,
  "land_area_acres": "11.20",
  "parcel_id": "247410-0100",
  "present_use": "Condominium(Residential)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
    "zoning": "R-24"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 2.16,
"land_area_acres": "0.36",
"location": "086-001 (SE Appraisal District)",
"owner": "MCCRAY SOPHIE LYNN ROSE",
"parcel_id": "252205-9249",
"present_use": "Mobile Home",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
  "best_use_vacant": "MULTI-FAMILY DWELLING",
  "estimated_max_du": 1.23,
  "land_area_acres": "0.23",
  "parcel_id": "257210-0160",
  "present_use": "Condominium(Residential)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-4"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 0.11,
    "land_area_acres": "0.55",
    "location": "098-009 (SE Appraisal District)",
    "owner": "CENTURIAN PROPERTIES II LLC",
    "parcel_id": "262207-9150",
    "present_use": "Single Family(Res Use/Zone)",
    "road_access": "PUBLIC",
    "sewer_system": "PRIVATE",
    "water_source": "PRIVATE",
    "zoning": "RA-5"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 0.0,
    "land_area_acres": "20.00",
    "location": "090-001 (NE Appraisal District)",
    "owner": "TIPP INVESTMENTS LLC",
    "parcel_id": "262309-9001",
    "present_use": "Vacant(Single-family)",
    "road_access": "WALK IN",
    "sewer_system": "(none)",
    "zoning": "F"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 0,
    "land_area_acres": "20.00",
    "location": "090-001 (NE Appraisal District)",
    "owner": "TIPP INVESTMENTS LLC",
    "parcel_id": "262309-9017",
     "present_use": "Vacant(Single-family)",
    "road_access": "WALK IN",
    "sewer_system": "(none)",
     "zoning": "F"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "20.00",
"location": "090-001 (NE Appraisal District)",
"owner": "TIPP INVESTMENTS LLC",
"parcel_id": "262309-9019",
"present_use": "Vacant(Single-family)",
"road_access": "WALK IN",
"sewer_system": "(none)",
"zoning": "F"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.0,
"land_area_acres": "20.00",
"location": "090-001 (NE Appraisal District)",
"owner": "TIPP INVESTMENTS LLC",
"parcel_id": "262309-9020",
"present_use": "Vacant(Single-family)",
"road_access": "RESTRICTED",
"sewer_system": "(none)",
"zoning": "F"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.0,
"land_area_acres": "22.50",
"location": "090-001 (NE Appraisal District)",
"owner": "TIPP INVESTMENTS LLC",
"parcel_id": "262309-9021",
"present_use": "Vacant(Single-family)",
"road_access": "RESTRICTED",
"sewer_system": "(none)",
"zoning": "F"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "22.50",
"location": "090-001 (NE Appraisal District)",
"owner": "TIPP INVESTMENTS LLC",
"parcel_id": "262309-9022",
"present_use": "Vacant(Single-family)",
"road_access": "RESTRICTED",
"sewer_system": "(none)",
"zoning": "F"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.13,
"land_area_acres": "0.13",
"location": "028-011 (SW Appraisal District)",
"owner": "ISRAEL RIVAS-ARDON &amp; RAQUEL",
"parcel_id": "264800-0185",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "MULTI-FAMILY DWELLING",
  "estimated_max_du": 0.11,
  "land_area_acres": "0.11",
  "location": "019-001 (NW Appraisal District)",
  "owner": "AKAI MELISA S",
  "parcel_id": "276760-2235",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "0.11",
"location": "011-003 (WC Appraisal District)",
"owner": "SWANSON C E",
"parcel_id": "277060-0355",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "MULTI-FAMILY DWELLING",
"estimated_max_du": 0.30,
"land_area_acres": "0.30",
"location": "30-90",
"owner": "BOWEN NATHAN",
"parcel_id": "286740-1020",
"present_use": "Condominium(Residential)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
 "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.48,
"land_area_acres": "0.08",
"location": "002-006 (NW Appraisal District)",
"owner": "BURDGE ROY",
"parcel_id": "288170-0471",
"present_use": "Mobile Home",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
 "zoning": "R-6"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 0.275,
    "land_area_acres": "2.75",
    "location": "040-001 (SE Appraisal District)",
    "owner": "BLAKE KENNETH W",
     "parcel_id": "292106-9015",
    "present_use": "Vacant(Single-family)",
    "road_access": "PUBLIC",
    "sewer_system": "PRIVATE",
    "water_source": "PRIVATE",
    "zoning": "A-10"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0,
  "land_area_acres": "0.14",
  "location": "007-004 (NW Appraisal District)",
  "owner": "THOMAS F B",
  "parcel_id": "292604-9371",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.84,
"land_area_acres": "0.14",
"location": "056-001 (SE Appraisal District)",
"owner": "BLAYLOCK HILTZ REBEKAH M",
"parcel_id": "302300-0490",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.712,
"land_area_acres": "3.56",
"location": "100-002 (SW Appraisal District)",
"owner": "LUCHINO SHARI",
"parcel_id": "302303-9162",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PRIVATE",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.23,
"land_area_acres": "0.21",
"location": "023-002 (WC Appraisal District)",
"owner": "LUCIER SUSAN",
"parcel_id": "309200-0235",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "0.10",
"location": "043-008 (NW Appraisal District)",
"owner": "CAVE 4 LLC",
"parcel_id": "313120-1595",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.13,
"land_area_acres": "0.13",
"location": "043-008 (NW Appraisal District)",
"owner": "UPHAM LI-CHIAO",
"parcel_id": "313120-1885",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.032,
  "land_area_acres": "0.19",
  "location": "088-003 (SW Appraisal District)",
  "owner": "SAHAGUN ARMANDO+ARGELIA",
  "parcel_id": "321040-0030",
  "present_use": "Single Family(Res Use/Zone)",
    "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.855,
"land_area_acres": "0.19",
"location": "061-009 (SW Appraisal District)",
"parcel_id": "322205-9223",
"present_use": "Vacant(Single-family)",
"road_access": "PRIVATE",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.994,
"land_area_acres": "4.97",
"location": "058-006 (SE Appraisal District)",
"owner": "FRANKOV ALEX",
"parcel_id": "322206-9141",
"present_use": "Vacant(Single-family)",
"road_access": "PRIVATE",
  "sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.326,
  "land_area_acres": "1.63",
  "location": "098-009 (SE Appraisal District)",
  "owner": "DOLL HARLAN L",
  "parcel_id": "322207-9202",
  "present_use": "Vacant(Single-family)",
  "road_access": "RESTRICTED",
  "sewer_system": "(none)",
  "zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.13,
"land_area_acres": "0.13",
"location": "022-002 (WC Appraisal District)",
"owner": "KAY DANA D",
"parcel_id": "322620-0085",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
 "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.88,
"land_area_acres": "0.22",
"location": "064-005 (SE Appraisal District)",
"owner": "BOTROS TALAT",
"parcel_id": "323900-0240",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.11,
"land_area_acres": "0.11",
"location": "021-003 (WC Appraisal District)",
"owner": "DILLON COREY",
"parcel_id": "333600-1250",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.56,
"land_area_acres": "0.39",
"location": "064-005 (SE Appraisal District)",
"owner": "ALPER GABRIEL",
"parcel_id": "334330-1023",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.54,
"land_area_acres": "0.09",
"location": "087-019 (SW Appraisal District)",
"owner": "PRESTO PROPERTIES LLC",
"parcel_id": "335590-0280",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.18,
"land_area_acres": "0.18",
"location": "087-017 (SW Appraisal District)",
"parcel_id": "335640-5330",
"present_use": "Mobile Home",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.608,
"land_area_acres": "1.52",
"location": "036-003 (NE Appraisal District)",
"parcel_id": "340470-0084",
"present_use": "Vacant(Single-family)",
"road_access": "PRIVATE",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
"zoning": "RA-2.5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.312,
"land_area_acres": "3.12",
"location": "040-001 (SE Appraisal District)",
"owner": "EQUITY GROUP NWEST LLC",
"parcel_id": "342006-9026",
"present_use": "Vacant(Single-family)",
"road_access": "RESTRICTED",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
"zoning": "RA-10"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.036,
"land_area_acres": "5.18",
"location": "098-009 (SE Appraisal District)",
"parcel_id": "342107-9076",
"present_use": "Vacant(Single-family)",
"road_access": "PRIVATE",
"sewer_system": "(none)",
"zoning": "RA-5"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 5.95,
  "land_area_acres": "29.75",
  "location": "098-009 (SE Appraisal District)",
  "owner": "HOSSNER STEVEN WALTER",
  "parcel_id": "342207-9015",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PRIVATE",
  "water_source": "PRIVATE",
  "zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 9.77,
"land_area_acres": "9.77",
"location": "035-003 (NE Appraisal District)",
"owner": "ALVENDIA RAMON+EDNA B",
"parcel_id": "342506-9050",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "(none)",
 "water_source": "PRIVATE",
"zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.17,
"land_area_acres": "0.17",
"location": "018-005 (WC Appraisal District)",
"owner": "ALVENDIA RAMON+EDNA",
"parcel_id": "343850-2718",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 1.2,
  "land_area_acres": "0.15",
  "location": "018-005 (WC Appraisal District)",
   "parcel_id": "343850-2724",
  "present_use": "Vacant(Single-family)",
    "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
  "parcel_id": "346280-0233",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 2.547,
"land_area_acres": "25.47",
"location": "040-001 (SE Appraisal District)",
"parcel_id": "352006-9020",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
"zoning": "RA-10"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 1.2,
    "land_area_acres": "12.00",
    "location": "040-001 (SE Appraisal District)",
    "owner": "EQUITY GROUP NWEST LLC",
    "parcel_id": "352006-9021",
    "present_use": "Vacant(Single-family)",
    "road_access": "PRIVATE",
    "sewer_system": "(none)",
    "water_source": "WATER DISTRICT",
    "zoning": "RA-10"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.32,
"land_area_acres": "0.53",
"location": "024-001 (WC Appraisal District)",
"owner": "SUTTON KRISTEN",
"parcel_id": "352304-9060",
"present_use": "Vacant(Single-family)",
"road_access": "PRIVATE",
"sewer_system": "(none)",
"water_source": "(none)",
"zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.36,
  "land_area_acres": "0.36",
  "location": "081-006 (WC Appraisal District)",
  "owner": "ESTATE OF PAULINE RIDLEY",
  "parcel_id": "352404-9147",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PRIVATE",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.16,
"land_area_acres": "0.29",
"location": "035-003 (NE Appraisal District)",
"parcel_id": "357530-0893",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 1.48,
    "land_area_acres": "0.37",
    "location": "035-003 (NE Appraisal District)",
     "parcel_id": "357530-0894",
    "present_use": "Vacant(Single-family)",
    "road_access": "PUBLIC",
    "sewer_system": "(none)",
    "water_source": "WATER DISTRICT",
    "zoning": "R-4"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 3.16,
  "land_area_acres": "0.79",
  "location": "035-003 (NE Appraisal District)",
    "parcel_id": "357530-0895",
  "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
  "sewer_system": "(none)",
  "water_source": "WATER DISTRICT",
  "zoning": "R-4"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.964,
  "land_area_acres": "4.82",
  "location": "028-010 (SW Appraisal District)",
    "parcel_id": "362105-9040",
  "present_use": "Open Space(Agric-RCW 84.34)",
   "road_access": "PUBLIC",
  "sewer_system": "PRIVATE RESTRICTED",
  "zoning": "RA-5"
}
,            {
"parcel_id": "362603-9398",
"zoning": "EXCEPTION"  
  }
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.88,
"land_area_acres": "0.22",
"location": "055-016 (SW Appraisal District)",
"owner": "CRUZ ALEJANDRO ALFEREZ & PA",
"parcel_id": "375060-4293",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.44,
"land_area_acres": "0.11",
"location": "055-016 (SW Appraisal District)",
"owner": "STANFORD MARK R",
"parcel_id": "375160-5809",
"present_use": "Vacant(Single-family)",
"road_access": "LEGAL/UNDEVELOPED",
"sewer_system": "(none)",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 2.36,
  "land_area_acres": "0.59",
    "location": "037-004 (NW Appraisal District)",
    "parcel_id": "376170-0256",
  "present_use": "Vacant(Single-family)",
   "road_access": "PRIVATE",
   "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-4"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 8.48,
  "land_area_acres": "2.12",
    "location": "037-004 (NW Appraisal District)",
  "owner": "WHEELER GLORIA",
  "parcel_id": "376170-0257",
  "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-4"
}
,            {
  "best_use_vacant": "MIXED USE",
  "estimated_max_du": 4.08,
  "land_area_acres": "0.17",
   "parcel_id": "379500-0010",
  "present_use": "Condominium(Residential)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-24"
}
,            {
"best_use_vacant": "COMMERCIAL SERVICE",
"land_area_acres": "0.34",
"parcel_id": "382800-0465",
 "present_use": "Retail Store",
 "road_access": "PUBLIC",
 "sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "MOBILE HOME",
  "estimated_max_du": 0.6,
  "land_area_acres": "0.10",
  "location": "029-002 (SW Appraisal District)",
  "owner": "LOPEZ VICTOR H+ALMA M CERVA",
  "parcel_id": "383210-0040",
  "present_use": "Mobile Home",
    "road_access": "PUBLIC",
    "sewer_system": "PUBLIC",
    "water_source": "WATER DISTRICT",
  "zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.08,
"land_area_acres": "0.18",
"location": "026-007 (SW Appraisal District)",
"owner": "YATES JAMES A",
"parcel_id": "383230-0010",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.0,
  "land_area_acres": "0.14",
  "location": "017-004 (WC Appraisal District)",
  "owner": "ALVENDIA RAMON+EDNA",
  "parcel_id": "384460-0020",
   "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.16,
"land_area_acres": "0.16",
"location": "096-001 (WC Appraisal District)",
"owner": "CHAMBERLAIN PROPERTY LLC",
"parcel_id": "391740-0080",
"present_use": "Single Family(C/I Zone)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "I"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.19,
"land_area_acres": "0.17",
"location": "028-008 (SW Appraisal District)",
"owner": "STEELE GEORGE DANIEL",
"parcel_id": "392090-0040",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.56,
"land_area_acres": "0.26",
"location": "003-005 (NW Appraisal District)",
"owner": "ANDERSON DAVID R",
"parcel_id": "398530-0269",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PRIVATE",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
 "zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.14,
"land_area_acres": "0.19",
"location": "003-007 (NW Appraisal District)",
"owner": "TENZLER CHAD M",
"parcel_id": "399570-0280",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.92,
"land_area_acres": "0.23",
"location": "055-015 (SW Appraisal District)",
"owner": "GRAY JOHN S SR",
"parcel_id": "404570-0545",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
  "parcel_id": "405820-0390",
  "zoning": "R-6"  
  }
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.022,
  "land_area_acres": "0.08",
  "location": "088-003 (SW Appraisal District)",
  "owner": "RAJ RAVIND+SHERLYN KRISHNA",
  "parcel_id": "418120-0440",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "RA-5"
}
,            {
"best_use_vacant": "MULTI-FAMILY DWELLING",
"estimated_max_du": 1.28,
"land_area_acres": "0.64",
"location": "17-70",
"owner": "COLWELL REBECCA B",
"parcel_id": "421790-0220",
"present_use": "Condominium(Residential)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.0,
  "land_area_acres": "0.17",
  "location": "077-006 (WC Appraisal District)",
  "owner": "KOCIR THOMAS+LYNDA",
  "parcel_id": "436470-0925",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.665,
"land_area_acres": "0.19",
"location": "092-006 (NE Appraisal District)",
"owner": "LIU XINLONG+DAI LIPING",
"parcel_id": "507840-0190",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0,
  "land_area_acres": "0.78",
  "location": "007-003 (NW Appraisal District)",
  "owner": "GARNET &amp; PITCH LLC",
  "parcel_id": "510140-4364",
   "present_use": "Vacant(Single-family)",
  "road_access": "RESTRICTED",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 2.91,
  "land_area_acres": "0.28",
  "location": "052-011 (SW Appraisal District)",
  "owner": "MATSUMOTO LEONARD",
   "parcel_id": "515160-0010",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "R-12"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.84,
"land_area_acres": "0.21",
"location": "047-013 (NE Appraisal District)",
"parcel_id": "519641-0200",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-4"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.68,
  "land_area_acres": "3.40",
  "location": "066-003 (SE Appraisal District)",
    "parcel_id": "522930-0235",
  "present_use": "Vacant(Single-family)",
  "road_access": "PUBLIC",
  "sewer_system": "PRIVATE",
  "water_source": "WATER DISTRICT",
  "zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.03,
"land_area_acres": "0.22",
"location": "088-002 (SW Appraisal District)",
"owner": "THORNTON STEPHEN M",
"parcel_id": "524540-0060",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "0.22",
"location": "079-007 (WC Appraisal District)",
"owner": "MONTOYA MARILYN C",
"parcel_id": "524880-0210",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.23,
"land_area_acres": "2.37",
"location": "024-001 (WC Appraisal District)",
"parcel_id": "537920-0205",
"present_use": "Vacant(Single-family)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
  "zoning": "R-1"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 6.86,
  "land_area_acres": "0.49",
  "location": "024-002 (WC Appraisal District)",
  "owner": "MCDONALD LINDA MARIE",
  "parcel_id": "538100-0491",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.92,
"land_area_acres": "0.24",
"location": "051-006 (SW Appraisal District)",
"owner": "LEEPER CLIFFORD S+JOSHUA L",
"parcel_id": "543800-0310",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-8"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.15,
"land_area_acres": "0.15",
"location": "022-002 (WC Appraisal District)",
"owner": "NGUYEN DIEU HONG THI",
"parcel_id": "547680-0271",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
  "zoning": "R-1"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.166,
"land_area_acres": "0.83",
"location": "066-013 (SE Appraisal District)",
"owner": "TERRIEN SCOTT C",
"parcel_id": "556140-0420",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "RA-5"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.02,
"land_area_acres": "0.17",
"location": "003-006 (NW Appraisal District)",
"owner": "SW MAJESTIC PROPERTIES LLC",
"parcel_id": "616390-1860",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 2.28,
"land_area_acres": "0.19",
"location": "023-005 (WC Appraisal District)",
"owner": "PIERCE THELMA J",
"parcel_id": "630340-0865",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-12"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.06,
"land_area_acres": "0.06",
"location": "015-003 (WC Appraisal District)",
"owner": "FARMER VICTORIA E",
"parcel_id": "636290-0065",
"present_use": "Townhouse Plat",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.29,
  "land_area_acres": "0.21",
  "location": "053-017 (SW Appraisal District)",
  "owner": "GOSSELIN MARGARET A",
  "parcel_id": "638660-0230",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
    "zoning": "R-4"
}
,            {
  "parcel_id": "638999-0920",
  "zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "MULTI-FAMILY DWELLING",
  "estimated_max_du": 97.5,
  "land_area_acres": "3.25",
    "parcel_id": "639000-0220",
  "present_use": "Condominium(Residential)",
    "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0.06,
"land_area_acres": "0.06",
"location": "006-003 (NW Appraisal District)",
"owner": "BT PROPERTY INVESTMENTS LLC",
"parcel_id": "645030-1435",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.22,
  "land_area_acres": "0.22",
  "location": "058-004 (SE Appraisal District)",
  "owner": "DUFFER JACK H JR",
    "parcel_id": "660040-0230",
  "present_use": "Single Family(Res Use/Zone)",
  "road_access": "PUBLIC",
  "sewer_system": "PRIVATE",
  "water_source": "WATER DISTRICT",
  "zoning": "RA-5"
}
,            {
"parcel_id": "662340-0094",
"zoning": "R-8"  
  }
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 0,
"land_area_acres": "0.42",
"location": "051-002 (SW Appraisal District)",
"owner": "MATIAS PEREZ MARGARITA+LEON",
"parcel_id": "662340-0241",
"present_use": "Mobile Home",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 6.76888888888889,
"land_area_acres": "30.46",
"location": "55-90",
"parcel_id": "666710-0050",
"present_use": "Condominium(Residential)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"parcel_id": "666780-1800",
"present_use": "Marina",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "MULTI-FAMILY DWELLING",
"estimated_max_du": 60.96,
"land_area_acres": "2.54",
"parcel_id": "679470-0160",
"present_use": "Condominium(Residential)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-24"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.32,
"land_area_acres": "0.22",
"location": "056-001 (SE Appraisal District)",
"owner": "SASAOKA MICHAEL M",
"parcel_id": "681750-0240",
"present_use": "Mobile Home",
"road_access": "PUBLIC",
"sewer_system": "PRIVATE",
"water_source": "WATER DISTRICT",
"zoning": "R-6"
}
,            {
  "best_use_vacant": "SINGLE FAMILY",
  "estimated_max_du": 0.01,
  "land_area_acres": "0.01",
  "location": "013-006 (WC Appraisal District)",
  "owner": "JIANG JOSEPH",
  "parcel_id": "685270-0267",
  "present_use": "Townhouse Plat",
  "road_access": "PUBLIC",
  "sewer_system": "PUBLIC",
  "water_source": "WATER DISTRICT",
  "zoning": "EXCEPTION"
}
,            {
"best_use_vacant": "SINGLE FAMILY",
"estimated_max_du": 1.16,
"land_area_acres": "0.20",
"location": "088-006 (SW Appraisal District)",
"parcel_id": "688900-0070",
"present_use": "Single Family(Res Use/Zone)",
"road_access": "PUBLIC",
"sewer_system": "PUBLIC",
"water_source": "WATER DISTRICT",
"zoning": "R-1"
}
,            {
    "best_use_vacant": "SINGLE FAMILY",
    "estimated_max_du": 1.44,
    "land_area_acres": "0.36",
    "location": "032-006 (SE Appraisal District)",
    "owner": "NGO TINH K",
    "parcel_id": "722990-0040",
    "present_use": "Vacant(Single-family)",
    "road_access": "PUBLIC",
    "sewer_system": "(none)",
    "water_source": "WATER DISTRICT",
    "zoning": "R-4"
}
  ];

  const sortOptions = [
    { value: 'parcel_id', label: 'Parcel ID' },
    { value: 'estimated_max_du', label: 'Max Dwelling Units' },
    { value: 'land_area_acres', label: 'Land Area' },
  ];

  const formatParcelForUrl = (parcelId) => {
    return parcelId.replace('-', '');
  };

  const getSortedParcels = () => {
    return [...parcels].sort((a, b) => {
      // quick check in case there is no field that is land_area_acres or estimated_max_du
      if (!a.hasOwnProperty(sortField) || !b.hasOwnProperty(sortField)){
        return 1;
      }
      
      
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      if (sortField === 'land_area_acres') {
        aValue = parseFloat(aValue);
        bValue = parseFloat(bValue);
      } else if (sortField === 'estimated_max_du') {
        aValue = parseFloat(aValue);
        bValue = parseFloat(bValue);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  };

  const InfoRow = ({ icon: Icon, label, value }) => (
    <div style={styles.infoRow}>
      <Icon style={styles.icon} />
      <span style={styles.infoLabel}>{label}:</span>
      <span style={styles.infoValue}>{value}</span>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.controlsBar}>
        <label style={styles.label}>Sort by:</label>
        <select 
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          style={styles.select}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          style={styles.button}
        >
          {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
        </button>
      </div>

      <div style={styles.grid}>
        {getSortedParcels().map((parcel) => (
          <div key={parcel.parcel_id} style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>
                Parcel {parcel.parcel_id}
              </h2>
              <a
                href={`https://blue.kingcounty.com/Assessor/eRealProperty/Detail.aspx?ParcelNbr=${formatParcelForUrl(parcel.parcel_id)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.viewButton}
              >
                <ExternalLink style={{ width: '16px', height: '16px' }} />
                View Property
              </a>
            </div>

            <div style={styles.cardContent}>
              <InfoRow 
                icon={Building} 
                label="Best Use" 
                value={parcel.best_use_vacant}
              />
              <InfoRow 
                icon={Home} 
                label="Max Dwelling Units" 
                value={!parcel.hasOwnProperty("estimated_max_du") ? "-999" : parcel.estimated_max_du.toFixed(2)}
              />
              <InfoRow 
                icon={MapPin} 
                label="Area" 
                value={`${parcel.land_area_acres} acres`}
              />
              <InfoRow 
                icon={MapPin} 
                label="Location" 
                value={parcel.location}
              />
              <InfoRow 
                icon={Map} 
                label="Road Access" 
                value={parcel.road_access}
              />
              <InfoRow 
                icon={Radio} 
                label="Sewer System" 
                value={parcel.sewer_system}
              />
              <InfoRow 
                icon={Droplet} 
                label="Water Source" 
                value={parcel.water_source}
              />
              
              <div style={styles.zoningSection}>
                <span style={styles.label}>Zoning:</span>
                <span style={styles.zoningTag}>
                  {parcel.zoning}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelViewer;
