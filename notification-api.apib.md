FORMAT: 1A

# Notification

# Group Order

## Post [/order-notification]

+ Response 501 (application/json)

        {
            "success": false,
            "message": "method is not yet implemented"
        }

+ Request (application/json)

        {
            "person": {
                "email": "mail@domain.tld",
                "name": "Lucy Cechtelar",
                "address": "426 Jordy Lodge\nCartwrightshire, SC 88120-6700"
            },
            "cart_id": "7e57d004-2b97-0e7a-b45f-5387367791cd"
        }

+ Response 201 (application/json)

        {
            "success": true
        }
