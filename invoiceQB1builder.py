from xml.etree.ElementTree import Element, SubElement, Comment, tostring 
import xml.etree.ElementTree as ET 
from xml.dom import minidom 

class InvoiceQIBuilder : 
    
        def __init__ (self, dataJson): 
                self.dataJson = dataJson 

        def getXml( self ) : 
                #pretty string
                invoice=self .buildXml( ) 
                xmlstr = minidom.parseString (ET.tostring ( invoice )).
                toprettyxml(indent="___" ) 
                return xmlstr
            def buildXml( self ): 
            #NAMESPACES
            ET.register_namespace('xades141','http://uri.etsi.org/01903/v1.4.1#') 
            ET.register_namespace('ext', 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents -2')
            ET.register_namespace('cbc', 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents -2') 
            ET.register_namespace('sts', 'Dian:gov:co:facturaelectronica:Structures -2-1')
            ET.register_namespace('xsi', 'http://www.W3.org/2001/XMLSchema-instance')
            ET.register_namespace('ds', 'http://www.w3.org/2000/09/xmldsig#') 
            ET.register_namespace('cac', 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents -2')
            ET.register_namespace(' ', 'urn:oasis:names:specification:ubl:schema:xsd:Invoice -2')

            #BUILD XML
            Invoice = Element ( 'Invoice' ) 
            UBLExtensions = SubElement( Invoice, '{urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents -2} UBLExtensions ')
            UBLExtension = SubElement(UBLExtensions, '{urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents -2} UBLExtension')
            
            ExtensionContent = SubElement (UBLExtensions, '{urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents -2} ExtensionContent ')
            DianExtensions = SubElement (ExtensionContent, '{dian:gov:co:facturaelectronica:Structures -2-1} DianExtensions')
            InvoiceControl = SubElement (DianExtensions, '{dian:gov:co:facturaelectronica:Structures -2-1} InvoiceControl ') 
            InvoiceAuthorization = SubElement (InvoiceControl, '{dian:gov:co:facturaelectronica:Structures -2-1} InvoiceAuthorization ')
            AuthorizationPeriod = SubElement (InvoiceControl, '{dian:gov:co:facturaelectronica:Structures -2-1} AuthorizationPeriod ')
            #FAB07
            StartDate = SubElement (Authorizationperiod, '{urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents -2} StartDate ')
            StartDate.text = self.dataJason ['FAB07'] 
            
            #FAB08
            EndDate = SubElement (AuthorizationPeriod, '(urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents -2 }EndDate ') 
            EndDate.text = self.dataJason ['FAB08'] 