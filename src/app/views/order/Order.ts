export default interface Product {
    order_id : number,
    order_customer_name : string,
    order_product_id : number,
    // order_invoice_id : number,
    order_placed_date :string,
    order_paid_date : string,
    order_quantity : number,
    order_unit_price : number,
    order_total_price : number,
    order_description : string,
    order_created_by : number,
}