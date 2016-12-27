 interface User{
            "id" ?: Number,
            "name" ?: String,
            "date_created" ?: String,
            "last_login" ?: String,
            "inviter" ?: null,
            "is_staff" ?: false,
            "is_superuser" ?: false,
            "is_active" ?: true,
            "has_temp_password" ?: false,
            "positions" ?: [
                {
                    "company" ?: {
                        "id" ?: Number,
                        "name" ?: String,
                        "slug" ?: String
                    },
                    "owner" ?: false,
                    "active" ?: true
                }
            ],
            "email" ?: String
        }