<?php

namespace App\Orders\Model;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Order
 *
 * @ORM\Table(name="`order`")
 * @ORM\Entity(repositoryClass="App\Orders\Repository\OrderRepository")
 */
class Order
{
    const ORDERING = 1;
    const DELIVERING = 2;
    const RECEIVED = 3;

    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer", length=11)
     */
    private int $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private string $sender;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private string $receiver;

    /**
     * @var int
     * @ORM\Column(type="smallint")
     */
    private int $status;

    public function __construct(string $sender, string $receiver)
    {
        $this->sender = $sender;
        $this->receiver = $receiver;
        $this->status = self::ORDERING;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getSender(): string
    {
        return $this->sender;
    }

    /**
     * @return string
     */
    public function getReceiver(): string
    {
        return $this->receiver;
    }

    /**
     * @return int
     */
    public function getStatus(): int
    {
        return $this->status;
    }

    /**
     * @return $this
     */
    public function delivery(): self
    {
        if ($this->status !== self::ORDERING) {
            throw new \LogicException('Cant set status "delivery"');
        }
        $this->status = self::DELIVERING;

        return $this;
    }

    /**
     * @return $this
     */
    public function received(): self
    {
        if ($this->status !== self::DELIVERING) {
            throw new \LogicException('Cant set status "received"');
        }
        $this->status = self::RECEIVED;

        return $this;
    }
}