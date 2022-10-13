<?php

namespace App\Orders\Repository;

use App\Orders\Model\Order;

interface OrderRepositoryInterface
{
    /**
     * @param string|null $by
     * @param string|null $query
     * @return Order[]
     */
    public function getAll(?string $by, ?string $query): array;
}